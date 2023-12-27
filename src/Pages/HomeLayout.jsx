import { Outlet, redirect, useNavigate } from 'react-router-dom';
import { Drawer } from '@mui/joy';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import {
  onSnapshot, collection, orderBy, query, getDocs, doc, getDoc,
} from 'firebase/firestore';
import Navbar from '../Components/Navbar/Navbar';
import DrawerComponent from '../Components/DrawerComponent/DrawerComponent';
import OpenSideBarBtn from '../Components/OpenSideBarBtn';
import { Board } from './index';
import { auth, db } from '../fireBase/fireBase';
import { setBoards, setCurBoards } from '../features/drawer/drawerSlice';
import { setUser } from '../features/db/dbSlice';
import { getCurrendBoardDB } from '../utils';

export function loader(store) {
  // return () => onAuthStateChanged(auth, (user) => {
  //   if (user === null) return redirect('/login');
  //   const userId = user.uid;
  //   store.dispatch(setUser(userId));
  //   const q = query(collection(db, `users/${userId}/boards`), orderBy('timeStamp'));
  //   return onSnapshot(q, (qSnap) => {
  //     if (qSnap.empty) return;
  //     const boards = [];
  //     qSnap.forEach((dc) => {
  //       const data = { ...dc.data() };
  //       delete data.timeStamp;
  //       boards.push(data);
  //     });
  //     const currentBoard = boards.at(-1);
  //     const columnsRef = collection(db, `users/${userId}/boards/${currentBoard.id}/columns`);
  //     return onSnapshot(columnsRef, (qSnap) => {
  //       const columns = [];
  //       qSnap.forEach((dc) => {
  //         const data = { ...dc.data() };
  //         columns.push(data);
  //       });
  //       currentBoard.columns = columns;
  //       store.dispatch(setCurBoards(currentBoard));
  //       store.dispatch(setBoards(boards));
  //       return null;
  //     });
  //   });
  // });

  // {
  //   const userId = auth.currentUser || localStorage.getItem('user');
  //   if (!userId) return redirect('/login');
  //   const q = query(collection(db, `users/${userId}/boards`), orderBy('timeStamp'));
  //   return onSnapshot(q, (qSnap) => {
  //     if (qSnap.empty) return;
  //     const boards = [];
  //     qSnap.forEach((dc) => {
  //       const data = { ...dc.data() };
  //       delete data.timeStamp;
  //       boards.push(data);
  //     });
  //     const currentBoard = boards.at(-1);
  //     const columnsRef = collection(db, `users/${userId}/boards/${currentBoard.id}/columns`);
  //     return onSnapshot(columnsRef, (qSnap) => {
  //       const columns = [];
  //       qSnap.forEach((dc) => {
  //         const data = { ...dc.data() };
  //         columns.push(data);
  //       });
  //       currentBoard.columns = columns;
  //       store.dispatch(setCurBoards(currentBoard));
  //       store.dispatch(setBoards(boards));
  //       store.dispatch(setUser(userId));
  //     });
  //   });
  // };
}

export default function HomeLayout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isOpen } = useSelector((store) => store.drawer);

  async function getDataDB() {
    return onAuthStateChanged(auth, (user) => {
      if (user === null) navigate('/login');
      const userId = user.uid;
      dispatch(setUser(userId));
      const q = query(collection(db, `users/${userId}/boards`), orderBy('timeStamp'));
      return onSnapshot(q, (qSnap) => {
        const boards = [];
        if (qSnap.empty) return null;
        qSnap.forEach((dc) => {
          const data = { ...dc.data() };
          delete data.timeStamp;
          boards.push(data);
        });
        const curBoardRef = doc(db, `users/${userId}/current/board`);
        return onSnapshot(curBoardRef, async (doc) => {
          const curBoard = await getCurrendBoardDB(userId, doc.data());
          dispatch(setBoards(boards));
          dispatch(setCurBoards(curBoard));
        });
        // const curBoardRef = doc(db, `users/${userId}/current/board`);
        // const curBoardDoc = await getDoc(curBoardRef);
        // const curBoard = curBoardDoc.data();
        // curBoard.columns = [];
        // const columnsRef = collection(db, `users/${userId}/boards/${curBoard.id}/columns`);
        // onSnapshot(columnsRef, (qSnap2) => {
        //   const columns = [];
        //   qSnap2.forEach((dc) => {
        //     const data = { ...dc.data() };
        //     curBoard.columns.push(data);
        //     // columns.push(data);
        //   });
        //   // curBoard.columns = [...columns];
        //   dispatch(setBoards(boards));
        //   dispatch(setCurBoards(curBoard));
        // });
      });
    });
  }

  // useEffect(
  //   () => onAuthStateChanged(auth, (user) => {
  //     if (user === null) navigate('/login');
  //     const userId = user.uid;
  //     dispatch(setUser(userId));
  //     const q = query(collection(db, `users/${userId}/boards`), orderBy('timeStamp'));
  //     onSnapshot(q, (qSnap) => {
  //       if (qSnap.empty) return;
  //       const boards = [];
  //       qSnap.forEach((dc) => {
  //         const data = { ...dc.data() };
  //         delete data.timeStamp;
  //         boards.push(data);
  //       });
  //       const currentBoard = boards.at(-1);
  //       const columnsRef = collection(db, `users/${userId}/boards/${currentBoard.id}/columns`);

  //       onSnapshot(columnsRef, (qSnap2) => {
  //         const columns = [];
  //         qSnap2.forEach((dc) => {
  //           const data = { ...dc.data() };
  //           columns.push(data);
  //         });
  //         currentBoard.columns = [...columns];
  //         dispatch(setBoards(boards));
  //         dispatch(setCurBoards(currentBoard));
  //         dispatch(setBoards(boards));
  //       });
  //     });
  //   }),
  //   [],
  // );

  useEffect(() => getDataDB, []);
  return (
    <>
      <Navbar />
      <Drawer
        disableEnforceFocus
        open={isOpen}
        sx={{ display: { xs: 'none', sm: 'block' } }}
      >
        <DrawerComponent />
      </Drawer>
      <OpenSideBarBtn />
      <Board />
      <Outlet />
    </>
  );
}
