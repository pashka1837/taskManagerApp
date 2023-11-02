/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import data from '../../../../data.json';

function getBoardsFromLC() {
  return JSON.parse(localStorage.getItem('boards')) || [...Object.values(data.boards)];
}

function getCurrentFromLC(boards) {
  return JSON.parse(localStorage.getItem('current')) || boards[0];
}
const boards = getBoardsFromLC();
const defaultState = {
  isOpen: false,
  boards: getBoardsFromLC(),
  current: getCurrentFromLC(boards),
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
      localStorage.setItem('current', JSON.stringify(state.current));
    },
    addBoard: (state, action) => {
      const newBoard = action.payload;
      state.boards.push(newBoard);
      state.current = state.boards.at(-1);
      drawerSlice.caseReducers.saveToLC(state);
    },
    addTask: (state, action) => {
      const newTask = action.payload;
      const currentBoard = state.boards.find((board) => board.name === state.current.name);
      const column = currentBoard.columns.find((column) => column.name === newTask.status);
      if (column) {
        column.tasks.push(newTask);
        state.current = currentBoard;
        drawerSlice.caseReducers.saveToLC(state);
        return;
      }
      const newColumn = {
        name: newTask.status,
        tasks: [newTask],
      };
      currentBoard.columns.push(newColumn);
      state.current = currentBoard;
      drawerSlice.caseReducers.saveToLC(state);
    },
    saveToLC: (state) => {
      localStorage.setItem('boards', JSON.stringify(state.boards));
      localStorage.setItem('current', JSON.stringify(state.current));
    },
  },

});
export default drawerSlice.reducer;

export const {
  toggleDrawer, setCurrent, addBoard, addTask,
} = drawerSlice.actions;
