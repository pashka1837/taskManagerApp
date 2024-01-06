/* eslint-disable import/prefer-default-export */

import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { auth } from '../fireBase/fireBase';
// import { useNavigate } from 'react-router-dom';
import { setUser } from '../features/db/dbSlice';

export function useCheckIfAuth() {
  const dispatch = useDispatch();
  const [isAuthed, setAuthed] = useState(null);
  useEffect(() => onAuthStateChanged(auth, (user) => {
    if (user) dispatch(setUser(user.uid));
  }), []);
}

// async function getDataDB() {
//     return onAuthStateChanged(auth, (user) => {
//       if (user === null) navigate('/login');
//       const userId = user.uid;

//       const queryBoardsRef = query(collection(db, `users/${userId}/boards`), orderBy('timeStamp'));

//       onSnapshot(queryBoardsRef, (queryBoards) => {
//         const boards = [];
//         if (!queryBoards.empty) {
//           queryBoards.forEach((board) => {
//             const data = { ...board.data() };
//             delete data.timeStamp;
//             boards.push(data);
//             getColumnsDB(userId, data.id);
//           });
//         }
//         const curBoardRef = doc(db, `users/${userId}/current/board`);

//         onSnapshot(curBoardRef, async (queryCurBoard) => {
//           let curBoard = null;
//           if (queryCurBoard.exists()) {
//             curBoard = queryCurBoard.data();
//             const curColumns = await getCurrentColumnsDB(userId, curBoard.id);
//             curBoard.columns = curColumns;
//           }
//           dispatch(setUser(userId));
//           dispatch(setBoards(boards));
//           dispatch(setCurBoards(curBoard));
//         });
//       });
//     });
//   }
