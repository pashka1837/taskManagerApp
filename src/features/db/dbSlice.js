/* eslint-disable prefer-template */
/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  doc, query, setDoc, updateDoc, where,
} from 'firebase/firestore';
import { db } from '../../fireBase/fireBase';
import { setDocWithTimeOutError } from '../../utils';

export const addDataDB = createAsyncThunk(
  'db/addDataDB',
  async (data) => {
    const { promisesDB, timeout } = data;
    await setDocWithTimeOutError(promisesDB, timeout);
  },
);
export const updateTaskDB = createAsyncThunk(
  'db/addtoDB',
  async (data) => {
    const {
      newData, userId, route, columnId,
    } = data;
    const docRef = doc(db, `users/${userId}/${route}`);
    const q = query(docRef, where('columns', 'array-contains', `${columnId}`));
    await updateDoc(q, {
      'q.tasks': [newData],
    });
  },
);

const defaultState = {
  user: null,
  isLoading: false,
  isError: false,
  isFinished: false,
  isOffline: false,
};

const dbSlice = createSlice({
  name: 'db',
  initialState: defaultState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload ? action.payload : null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addDataDB.pending, (state) => {
      state.isLoading = true;
      console.log('loading');
    });
    builder.addCase(addDataDB.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log('finish');
    });
    builder.addCase(addDataDB.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      console.log('error');
    });
  },
  //     extraReducers : (builder)=>{
  //     builder.addCase(updateTaskDB.pending, (state) => {
  //       state.isLoading = true;
  //       console.log('loading');
  //     });
  //     builder.addCase(updateTaskDB.fulfilled, (state, action) => {
  //       state.isLoading = false;

//       console.log('finish');
//     });
//     builder.addCase(updateTaskDB.rejected, (state, action) => {
//       state.isLoading = false;
//       state.isError = true;
//       console.log('error');
//     });
//   },
});

export default dbSlice.reducer;

export const { setUser } = dbSlice.actions;
