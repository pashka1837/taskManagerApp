/* eslint-disable max-len */
/* eslint-disable consistent-return */
import {
  Outlet, useNavigate,
} from 'react-router-dom';
import { Drawer } from '@mui/joy';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import {
  onSnapshot, doc,
} from 'firebase/firestore';
import Navbar from '../Components/Navbar/Navbar';
import DrawerComponent from '../Components/DrawerComponent/DrawerComponent';
import OpenSideBarBtn from '../Components/OpenSideBarBtn';
import { Board } from './index';
import { auth, db } from '../fireBase/fireBase';
import { setCurBoards } from '../features/drawer/drawerSlice';
import {
  getDataDB, setUser,
} from '../features/db/dbSlice';
import { getCurrentColumnsDB } from '../utils/dbActions';
import Loader from '../Components/Loader/Loader';

export default function HomeLayout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isOpen } = useSelector((store) => store.drawer);
  const { isLoading } = useSelector((store) => store.db);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user === null) return navigate('/login');

      const userId = user.uid;
      dispatch(setUser(userId));
      dispatch(getDataDB(userId));

      const curBoardRef = doc(db, `users/${userId}/current/board`);
      onSnapshot(curBoardRef, async (queryCurBoard) => {
        let curBoard = null;
        if (queryCurBoard.exists()) {
          curBoard = queryCurBoard.data();
          const curColumns = await getCurrentColumnsDB(userId, curBoard.id);
          curBoard.columns = curColumns;
        }
        dispatch(setCurBoards(curBoard));
      });
    });

    return unsub;
  }, []);

  return (
    <>
      {isLoading && <Loader />}
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

// useEffect(() => {
//   const unsub = onAuthStateChanged(auth, (user) => {
//     if (user === null) return navigate('/login');

//     const userId = user.uid;
//     dispatch(setUser(userId));
//     // dispatch(setTimeOut(0));

//     const queryBoardsRef = query(collection(db, `users/${userId}/boards`), orderBy('timeStamp'));

//     onSnapshot(queryBoardsRef, { includeMetadataChanges: true }, (queryBoards) => {
//       dispatch(setIsLoading(true));

//       const boards = [];
//       const promisesDB = [];
//       if (!queryBoards.empty) {
//         queryBoards.forEach(async (board) => {
//           const data = { ...board.data() };
//           delete data.timeStamp;
//           boards.push(data);
//           promisesDB.push(getColumnsAsyncDB(userId, data.id));
//           dispatch(getDataDB(promisesDB));
//           // getColumnsDB(userId, data.id);
//           // await getColumnsAsyncDB(userId, data.id);
//         });
//       }
//       const curBoardRef = doc(db, `users/${userId}/current/board`);

//       onSnapshot(curBoardRef, { includeMetadataChanges: true }, async (queryCurBoard) => {
//         let curBoard = null;
//         if (queryCurBoard.exists()) {
//           curBoard = queryCurBoard.data();
//           const curColumns = await getCurrentColumnsDB(userId, curBoard.id);
//           curBoard.columns = curColumns;
//         }
//         dispatch(setBoards(boards));
//         dispatch(setCurBoards(curBoard));
//         dispatch(setIsLoading(false));
//         // await disableNetwork(db);
//       });
//     });
//   });
//   return unsub;
// }, []);
