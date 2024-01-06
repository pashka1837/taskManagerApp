import {
  arrayUnion, collection, deleteDoc, doc, getDocs, onSnapshot, setDoc, updateDoc,
} from 'firebase/firestore';
import { addDataDB, getDataDB } from '../features/db/dbSlice';
import { db } from '../fireBase/fireBase';

import store from '../store';

/* eslint-disable max-len */

function setColumnsDoc(columns, defRoute) {
  return columns.map((colmn) => setDoc(doc(db, `${defRoute}/columns/${colmn.id}`), colmn));
}

function deleteColumnsDoc(columns, defRoute) {
  return columns.map((colmn) => deleteDoc(doc(db, `${defRoute}/columns/${colmn.id}`)));
}

async function updTasksDB(store) {
  const { columns, id } = store.getState().drawer.current;
  const { timeout } = store.getState().db;

  const userId = `${store.getState().db.user}`;

  const boardRoute = `users/${userId}/boards/${id}`;

  await store.dispatch(addDataDB({ promisesDB: [...setColumnsDoc(columns, boardRoute)], timeout }));
}

async function updBoardDB(store, oldColumns) {
  const currentBoard = store.getState().drawer.current;
  const { timeout } = store.getState().db;

  const userId = `${store.getState().db.user}`;
  const { id, name, columns: curColumns } = currentBoard;

  const boardRoute = `users/${userId}/boards/${id}`;
  const curBoardRoute = `users/${userId}/current/board`;

  const boardsRef = doc(db, boardRoute);
  const curBoardRef = doc(db, curBoardRoute);

  const boardPromise = setDoc(boardsRef, { id, name, timeStamp: new Date() });
  const curBoardPromise = setDoc(curBoardRef, { id, name });

  const columnsToDel = oldColumns.filter((old) => {
    const isExists = curColumns.some((cur) => old.id === cur.id);
    if (!isExists) return true;
    return false;
  });
  const promisesDB = [boardPromise, curBoardPromise, ...setColumnsDoc(curColumns, boardRoute), ...deleteColumnsDoc(columnsToDel, boardRoute)];

  await store.dispatch(addDataDB({ promisesDB, timeout }));
}

async function addTaskDB(store, newTask) {
  const userId = `${store.getState().db.user}`;
  const { current } = store.getState().drawer;
  const { timeout } = store.getState().db;

  const defRoute = `users/${userId}/boards/${current.id}/columns/${newTask.status}`;

  const columnRef = doc(db, defRoute);
  const updTasksPromise = [updateDoc(columnRef, {
    tasks: arrayUnion(newTask),
  })];
  store.dispatch(addDataDB({ promisesDB: updTasksPromise, timeout }));
}

async function addColumnsDB(store, columns) {
  const { timeout } = store.getState().db;

  const userId = `${store.getState().db.user}`;
  const { current } = store.getState().drawer;

  const columnsRoute = `users/${userId}/boards/${current.id}`;

  await store.dispatch(addDataDB({ promisesDB: [...setColumnsDoc(columns, columnsRoute)], timeout }));
}

async function addBoardDB(store, board, columns) {
  const { id, name, timeStamp } = board;
  const userId = `${store.getState().db.user}`;
  const { timeout } = store.getState().db;

  const boardRoute = `users/${userId}/boards/${id}`;
  const curBoardRoute = `users/${userId}/current/board`;

  const boardsRef = doc(db, boardRoute);
  const curBoardRef = doc(db, curBoardRoute);

  const boardPromise = setDoc(boardsRef, { id, name, timeStamp });
  const curBoardPromise = setDoc(curBoardRef, { id, name });

  const promisesDB = [boardPromise, curBoardPromise, ...setColumnsDoc(columns, boardRoute)];

  await store.dispatch(addDataDB({ promisesDB, timeout }));
}

async function deleteBoardDB(store, oldBoard) {
  const userId = `${store.getState().db.user}`;
  const { timeout } = store.getState().db;

  const { id: oldBoardId } = oldBoard;
  const boardRoute = `users/${userId}/boards/${oldBoardId}`;
  const curBoardRoute = `users/${userId}/current/board`;

  const boardsRef = doc(db, boardRoute);
  const curBoardRef = doc(db, curBoardRoute);

  const currentBoard = store.getState().drawer.current;
  let curBoardPromise = null;
  if (currentBoard) {
    delete currentBoard.columns;
    curBoardPromise = setDoc(curBoardRef, currentBoard);
  } else curBoardPromise = deleteDoc(curBoardRef);

  const boardPromise = deleteDoc(boardsRef);

  const promisesDB = [curBoardPromise, boardPromise];

  await store.dispatch(addDataDB({ promisesDB, timeout }));
}

function getColumnsDB(userID, boardID) {
  const columnsRef = collection(db, `users/${userID}/boards/${boardID}/columns`);
  onSnapshot(columnsRef);
}

export function getColumnsAsyncDB(userID, boardID, dispatch) {
  const columnsRef = collection(db, `users/${userID}/boards/${boardID}/columns`);
  const promisesDB = [];
  return getDocs(columnsRef);
  // await store.dispatch(getDataDB({ promisesDB, timeout: 1000 }));
}

async function getCurrentColumnsDB(userID, curBoardID) {
  const columnsRef = collection(db, `users/${userID}/boards/${curBoardID}/columns`);
  const columns = [];
  const querySnapshot = await getDocs(columnsRef);

  if (querySnapshot.empty) return columns;
  querySnapshot.forEach((docs) => {
    columns.push({ ...docs.data() });
  });
  return columns;
}

export {
  updTasksDB, updBoardDB, addTaskDB, addColumnsDB, addBoardDB, deleteBoardDB, getCurrentColumnsDB, setColumnsDoc, getColumnsDB, deleteColumnsDoc,
};
