import {
  collection, doc, getDocs, setDoc,
} from 'firebase/firestore';
import { db } from '../fireBase/fireBase';

function subtasksDone(subtasks) {
  let finnishedSubTasks = 0;
  if (subtasks.length) {
    subtasks.forEach((st) => {
      if (st.isCompleted) finnishedSubTasks += 1;
    });
  }
  return finnishedSubTasks;
}

function inputsValidation(inputTitleValue, inputSubValues, setTitleError, setSubError) {
  if (!inputTitleValue) { setTitleError(true); }
  let isEr = false;
  inputSubValues.forEach((st) => {
    if (!st.name) { st.isError = true; isEr = true; }
  });
  if (isEr || !inputTitleValue) { setSubError(true); return true; }
  return false;
}

async function getCurrendBoardDB(userId, curBoard) {
  const columnsRef = collection(db, `users/${userId}/boards/${curBoard.id}/columns`);
  const currentBoard = { ...curBoard };
  currentBoard.columns = [];
  const columns = [];
  const querySnapshot = await getDocs(columnsRef);
  if (querySnapshot.empty) return currentBoard;
  querySnapshot.forEach((docs) => {
    columns.push({ ...docs.data() });
  });
  currentBoard.columns = [...columns];
  return currentBoard;
}

function setColumnsDoc(columns, defRoute) {
  return columns.map((colmn) => setDoc(doc(db, `${defRoute}/columns/${colmn.id}`), colmn));
}

// function setDocWithTimeOutError(promissAr, timeout) {
//   const { tries, time } = timeout;
//   const wait = new Promise((resolve, reject) => setTimeout(
//     () => {
//       if (tries === 1) return reject();
//       return setDocWithTimeOutError(promissAr, { tries: tries - 1, time });
//     },
//     time,
//   ));

//   return Promise.race([...promissAr, wait]);
// }
function setDocWithTimeOutError(promissAr, timeout) {
  const wait = new Promise((_, reject) => setTimeout(reject, timeout, new Error('No connection to server')));
  return Promise.race([...promissAr, wait]);
}

export {
  subtasksDone, inputsValidation, getCurrendBoardDB, setDocWithTimeOutError, setColumnsDoc,
};
