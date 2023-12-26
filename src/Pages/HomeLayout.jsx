import { Outlet, useNavigate } from 'react-router-dom';
import { Drawer } from '@mui/joy';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import {
  getDatabase, ref, onValue, get, child, query, equalTo, orderByChild, set,
} from 'firebase/database';
import { onSnapshot } from 'firebase/firestore';
import Navbar from '../Components/Navbar/Navbar';
import DrawerComponent from '../Components/DrawerComponent/DrawerComponent';
import OpenSideBarBtn from '../Components/OpenSideBarBtn';
import { Board } from './index';
import { auth, db } from '../fireBase/fireBase';
import { setBoards, setCurrent } from '../features/drawer/drawerSlice';

export default function HomeLayout() {
  const dispathc = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user === null) navigate('/login');
    });
  }, []);

  useEffect(() => {
    const dbRef = ref(db, 'users/userId/boards/1/columns/17');
    // const q = query(ref(db, 'users/userId/boards'), orderByChild('id'), equalTo(1));
    // return onSnapshot(dbRef, (snap) => {
    //   console.log(snap.data());
    // });
    return onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      if (snapshot.exists()) {
        console.log(data);
        dispathc(setBoards(data.boards));
        dispathc(setCurrent(data.boards.at(0).id));
      } else console.log('no data');
    });
  }, []);
  function addTaskToDB(userId, boardId, columnId, taskId) {
    set(ref(db, 'users/userId/1/columns/17/tasks/18'), {
      title: 'huy',
    }).then(() => console.log('succsess')).catch((e) => console.log(e));
  }
  addTaskToDB();
  const { isOpen } = useSelector((store) => store.drawer);

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
