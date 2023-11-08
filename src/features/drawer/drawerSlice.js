/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

function getBoardsFromLC() {
  return JSON.parse(localStorage.getItem('boards')) || [];
}

function getCurrentFromLC() {
  return JSON.parse(localStorage.getItem('current')) || null;
}

const defaultState = {
  isOpen: false,
  isMenuOpen: false,
  boards: getBoardsFromLC(),
  current: getCurrentFromLC(),
  currentTask: null,
  currentColumn: null,
};

function changeColumn(state, newColID, currentBoard, column, updTask) {
  if (state.currentColumn !== newColID) {
    const taskIndex = column.tasks.findIndex((taskk) => taskk.id === state.currentTask);
    column.tasks.splice(taskIndex, 1);
    const newColumn = currentBoard.columns.find((columnn) => columnn.id === newColID);
    if (!(newColumn.tasks?.length)) newColumn.tasks = [];
    newColumn.tasks.push(updTask);
  }
}

export const drawerSlice = createSlice({
  name: 'drawer',
  initialState: defaultState,
  reducers: {
    setCurTask: (state, action) => {
      state.currentTask = action.payload;
    },
    setCurColumn: (state, action) => {
      state.currentColumn = action.payload;
    },
    toggleDrawer: (state, action) => {
      state.isOpen = action.payload;
    },
    toggleMenu: (state, action) => {
      state.isMenuOpen = action.payload;
    },
    setCurrent: (state, action) => {
      const newCur = action.payload;
      const indxOfNewBoard = state.boards.findIndex((item) => item.id === newCur);
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
      state.current = state.boards[0] || null;
      drawerSlice.caseReducers.saveToLC(state);
    },
    addColumns: (state, action) => {
      const newColumns = action.payload;
      const currentBoard = state.boards.find((board) => board.id === state.current.id);
      newColumns.forEach((newC) => currentBoard.columns.push(newC));
      state.current = currentBoard;
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
    editTask: (state, action) => {
      const {
        title, description, status, subtasks,
      } = action.payload;
      const currentBoard = state.boards.find((board) => board.id === state.current.id);
      const column = currentBoard.columns.find((columnn) => columnn.id === state.currentColumn);
      const updTask = column.tasks.find((tsk) => tsk.id === state.currentTask);
      updTask.title = title;
      updTask.description = description;

      updTask.subtasks = subtasks;
      changeColumn(state, status, currentBoard, column, updTask);
      state.current = currentBoard;
      drawerSlice.caseReducers.saveToLC(state);
    },
    deleteTask: (state) => {
      const currentBoard = state.boards.find((board) => board.id === state.current.id);
      const column = currentBoard.columns.find((columnn) => columnn.id === state.currentColumn);
      const newTasksAr = column.tasks.filter((task) => task.id !== state.currentTask);
      column.tasks = newTasksAr;
      state.current = currentBoard;
      drawerSlice.caseReducers.saveToLC(state);
    },
    changeTaskStatus: (state, action) => {
      const {
        columnID, taskId, subtasks, curStatus,
      } = action.payload;
      const currentBoard = state.boards.find((board) => board.id === state.current.id);
      const column = currentBoard.columns.find((columnn) => columnn.id === columnID);
      const task = column.tasks.find((taskk) => taskk.id === taskId);

      task.subtasks = subtasks;
      changeColumn(state, curStatus, currentBoard, column, task);

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
  toggleDrawer, toggleMenu, setCurrent, addBoard, addTask, editBoard, deleteBoard,
  changeTaskStatus, deleteTask, setCurTask, setCurColumn, editTask, addColumns,
} = drawerSlice.actions;
