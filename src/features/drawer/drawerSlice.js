/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import data from '../../../../data.json';
import boards1 from '../../../someData';

function getBoardsFromLC() {
  return JSON.parse(localStorage.getItem('boards')) || boards1;
}
// function getBoardsFromLC() {
//   return boards1;
// }

function getCurrentFromLC(boards) {
  return JSON.parse(localStorage.getItem('current')) || boards[0];
}
const boards = getBoardsFromLC();
const defaultState = {
  isOpen: false,
  boards: getBoardsFromLC(),
  current: getCurrentFromLC(boards),
};

export const drawerSlice = createSlice({
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
    editBoard: (state, action) => {
      const { id, name, columns } = action.payload;
      const currentBoard = state.boards.find((board) => board.id === state.current.id);
      const newColumns = [];
      if (columns.length) {
        columns.forEach((updCol) => {
          const curCol = currentBoard.columns.find((col) => updCol.id === col.id);
          if (curCol) {
            curCol.name = updCol.name;
            newColumns.push(curCol);
          } else {
            const newColumn = {
              id: updCol.id,
              name: updCol.name,
            };
            newColumns.push(newColumn);
          }
        });
      }
      currentBoard.columns = newColumns;
      currentBoard.name = name;
      state.current = currentBoard;
      drawerSlice.caseReducers.saveToLC(state);
    },
    deleteBoard: (state, action) => {
      const leftBoards = state.boards.filter((board) => board.name !== state.current.name);
      state.boards = leftBoards;
      state.current = state.boards[0];
      drawerSlice.caseReducers.saveToLC(state);
    },
    addTask: (state, action) => {
      const newTask = action.payload;
      const currentBoard = state.boards.find((board) => board.id === state.current.id);
      const column = currentBoard.columns.find((columnn) => columnn.id === newTask.status);
      if (column) {
        if (!column.tasks) column.tasks = [];
        column.tasks.push(newTask);
        state.current = currentBoard;
        drawerSlice.caseReducers.saveToLC(state);
        return;
      }
      const newColumn = {
        id: newTask.status,
        name: 'New',
        tasks: [newTask],
      };
      currentBoard.columns.push(newColumn);
      state.current = currentBoard;
      drawerSlice.caseReducers.saveToLC(state);
    },
    changeTaskStatus: (state, action) => {
      const {
        columnName, taskId, descr, subtasks, curStatus,
      } = action.payload;
      const currentBoard = state.boards.find((board) => board.name === state.current.name);
      const column = currentBoard.columns.find((columnn) => columnn.name === columnName);
      const task = column.tasks.find((taskk) => taskk.id === taskId);
      task.description = descr;

      task.subtasks.forEach((subT) => {
        // subT.isCompleted = false;
        // subtasks.forEach((chSubt) => {
        //   if (subT.id === chSubt)subT.isCompleted = true;
        // });
        subT.isCompleted = subtasks.includes(subT.id);
      });

      if (columnName !== curStatus) {
        const taskIndex = column.tasks.findIndex((taskk) => taskk.id === taskId);
        column.tasks.splice(taskIndex, 1);
        const newColumn = currentBoard.columns.find((columnn) => columnn.name === curStatus);
        newColumn.tasks.push(task);
      }
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
  toggleDrawer, setCurrent, addBoard, addTask, editBoard, deleteBoard,
  changeTaskStatus,
} = drawerSlice.actions;
