/* eslint-disable prefer-template */
/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getDocs } from 'firebase/firestore';

function setDocWithTimeOutError(promissAr, timeout) {
  const wait = new Promise((_, reject) => setTimeout(reject, timeout, new Error('No connection to server')));
  return Promise.race([...promissAr, wait]);
}

export const addDataDB = createAsyncThunk(
  'db/addDataDB',
  async (data) => {
    const { promisesDB, timeout } = data;
    await setDocWithTimeOutError(promisesDB, timeout);
  },
);
export const getDataDB = createAsyncThunk(
  'db/getDataDB',
  async (query) => {
    console.log(query);
    const res = await getDocs(query);
    console.log(res);
    return res;
  },
);
// export const addNewBoardDB = createAsyncThunk(
//   'db/getDataDB',
//   async (promisesDB) => {
//     await Promise.all(promisesDB);
//   },
// );

const defaultState = {
  user: null,
  timeout: 1000,
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
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setTimeOut: (state, action) => {
      state.timeout = action.payload;
    },

  },
  extraReducers: (builder) => {
    builder.addCase(addDataDB.pending, (state) => {
      state.isLoading = true;
      console.log('loading');
    });
    builder.addCase(addDataDB.fulfilled, (state) => {
      state.isLoading = false;
      console.log('finish');
    });
    builder.addCase(addDataDB.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
      console.log('error');
    });
    builder.addCase(getDataDB.pending, (state) => {
      state.isLoading = true;
      console.log('loading');
    });
    builder.addCase(getDataDB.fulfilled, (state, action) => {
      console.log(action.payload);
      state.isLoading = false;
      console.log('finish');
    });
    builder.addCase(getDataDB.rejected, (state, action) => {
      console.log(action.payload);
      state.isLoading = false;
      state.isError = true;
      console.log('error');
    });
  },

});

export default dbSlice.reducer;

export const { setUser, setIsLoading, setTimeOut } = dbSlice.actions;
