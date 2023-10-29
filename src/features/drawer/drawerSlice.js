import { createSlice } from '@reduxjs/toolkit';
import data from '../../../../data.json';

function getBoardsFromLC() {
  console.log(Object.values(data.boards));
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
    //   console.log(action.payload);
      const newCur = action.payload;
      const indxOfNewBoard = state.boards.findIndex((item) => item.name === newCur);
      state.current = state.boards[indxOfNewBoard];
    //   console.log('setCur', state.boards[indxOfNewBoard].name);
    },
    addBoard: (state, payload) => {
      const newColumns = payload.action.map(((item) => ({ name: item, tasks: null })));
      const newBoard = {
        name: payload.action,
        colums: newColumns,
      };
      console.log('addBoard', newBoard);
    },
  },

});
export default drawerSlice.reducer;

export const { toggleDrawer, setCurrent, addBoard } = drawerSlice.actions;
