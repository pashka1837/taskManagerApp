/* eslint-disable prefer-template */
/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { collection, getDocs, orderBy } from 'firebase/firestore';
import { query } from 'firebase/database';
import { db } from '../../fireBase/fireBase';

function getColumnsAsyncDB(userID, boardID) {
  const columnsRef = collection(db, `users/${userID}/boards/${boardID}/columns`);
  return getDocs(columnsRef);
}

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
  async (userId) => {
    const queryBoardsRef = query(collection(db, `users/${userId}/boards`), orderBy('timeStamp'));
    const queryBoards = await getDocs(queryBoardsRef);

    const boards = [];
    if (!queryBoards.empty) {
      queryBoards.forEach(async (board) => {
        const data = { ...board.data() };
        delete data.timeStamp;
        boards.push(data);
      });
    }
    return boards;
  },
);

const defaultState = {
  user: null,
  boards: [],
  timeout: 1000,
  isLoading: false,
  isError: false,
  isFinished: false,
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
    setBoards: (state, action) => {
      state.boards = action.payload;
    },
    setLogOutUserDbSlice: (state) => {
      state.boards = [];
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addDataDB.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addDataDB.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(addDataDB.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(getDataDB.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getDataDB.fulfilled, (state, action) => {
      state.boards = action.payload;

      state.isLoading = false;
    });
    builder.addCase(getDataDB.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },

});

export default dbSlice.reducer;

export const {
  setUser, setIsLoading, setTimeOut, setBoards, deleteBoard, setLogOutUserDbSlice,
} = dbSlice.actions;
