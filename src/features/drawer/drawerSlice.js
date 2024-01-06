/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const defaultState = {
  isOpen: false,
  isMenuOpen: false,
  boards: [],
  current: null,
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
    setBoards: (state, action) => {
      state.boards = action.payload;
    },
    setCurBoards: (state, action) => {
      state.current = action.payload;
    },
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
    editBoard: (state, action) => {
      const { id, name, columns } = action.payload;
      const currentBoard = state.current;
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
      state.current.columns = newColumns;
      state.current.name = name;
    },
    deleteBoard: (state, action) => {
      const leftBoards = state.boards.filter((board) => board.id !== state.current.id);
      state.boards = leftBoards;
      state.current = state.boards[0] || null;
    },

    addColumns: (state, action) => {
      const newColumns = action.payload;
      state.current.columns.push(...newColumns);
    },

    addTask: (state, action) => {
      const newTask = action.payload;
      const currentBoard = state.current;
      const column = currentBoard.columns.find((columnn) => columnn.id === newTask.status);
      column.tasks.push(newTask);
    },
    editTask: (state, action) => {
      const {
        title, description, status, subtasks,
      } = action.payload;
      const currentBoard = state.current;
      const column = currentBoard.columns.find((columnn) => columnn.id === state.currentColumn);
      const updTask = column.tasks.find((tsk) => tsk.id === state.currentTask);
      updTask.title = title;
      updTask.description = description;

      updTask.subtasks = subtasks;
      changeColumn(state, status, currentBoard, column, updTask);
    },

    deleteTask: (state) => {
      const currentBoard = state.current;
      const column = currentBoard.columns.find((columnn) => columnn.id === state.currentColumn);
      const newTasksAr = column.tasks.filter((task) => task.id !== state.currentTask);
      column.tasks = newTasksAr;
      state.currentTask = null;
    },
    changeTaskStatus: (state, action) => {
      const {
        columnID, taskId, subtasks, curStatus,
      } = action.payload;
      const currentBoard = state.current;
      const column = currentBoard.columns.find((columnn) => columnn.id === columnID);
      const task = column.tasks.find((taskk) => taskk.id === taskId);

      task.subtasks = subtasks;
      changeColumn(state, curStatus, currentBoard, column, task);
    },

    dragAndDrop: (state, action) => {
      const {
        nextColId, nextTaskId, taskID, columnID,
      } = action.payload;
      const currentBoard = state.current;
      const column = currentBoard.columns.find((columnn) => columnn.id === columnID);
      const task = column.tasks.find((taskk) => taskk.id === taskID);
      if (nextTaskId !== taskID) {
        const taskIndex = column.tasks.findIndex((taskk) => taskk.id === taskID);
        column.tasks.splice(taskIndex, 1);
        if (columnID === nextColId) {
          const nextTaskIndex = column.tasks.findIndex((taskk) => taskk.id === nextTaskId);
          column.tasks.splice(nextTaskIndex, 0, task);
        } else {
          const newColumn = currentBoard.columns.find((columnn) => columnn.id === nextColId);
          if (!(newColumn.tasks?.length)) newColumn.tasks = [];
          if (nextTaskId === 'none') newColumn.tasks.push(task);
          else {
            const nextTaskIndex = newColumn.tasks.findIndex((taskk) => taskk.id === nextTaskId);
            newColumn.tasks.splice(nextTaskIndex, 0, task);
          }
        }
      }
      // state.current = currentBoard;
      // drawerSlice.caseReducers.saveToLC(state);
    },

    saveToLC: (state) => {
      localStorage.setItem('boards', JSON.stringify(state.boards));
      localStorage.setItem('current', JSON.stringify(state.current));
    },
  },

});
export default drawerSlice.reducer;

export const {
  setBoards, setCurBoards,
  toggleDrawer, toggleMenu, setCurrent, addBoard, addTask, editBoard, deleteBoard,
  changeTaskStatus, deleteTask, setCurTask, setCurColumn, editTask, addColumns, dragAndDrop,
} = drawerSlice.actions;
