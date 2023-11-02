/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import data from '../../../../data.json';

function getBoardsFromLC() {
  return localStorage.getItem('boards') || [...Object.values(data.boards)];
}
const boards = getBoardsFromLC();
const defaultState = {
  isOpen: false,
  boards,
  current: boards[0],
};

const drawerSlice = createSlice({
  name: 'drawer',
  initialState: defaultState,
  reducers: {
    toggleDrawer: (state) => {
      state.isOpen = !state.isOpen;
    },
    setCurrent: (state, action) => {
      const newCur = action.payload;
      const indxOfNewBoard = state.boards.findIndex((item) => item.name === newCur);
      state.current = state.boards[indxOfNewBoard];
    },
    addBoard: (state, action) => {
      // console.log(payload.action);
      const newBoard = action.payload;
      console.log(newBoard);
      state.boards.push(newBoard);
      state.current = state.boards.at(-1);
    },

  },

});
export default drawerSlice.reducer;

export const { toggleDrawer, setCurrent, addBoard } = drawerSlice.actions;
