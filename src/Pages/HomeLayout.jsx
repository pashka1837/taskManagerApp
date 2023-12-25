import { Outlet, useNavigate } from 'react-router-dom';
import { Drawer } from '@mui/joy';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import {
  getDatabase, ref, onValue, get, child,
} from 'firebase/database';
import Navbar from '../Components/Navbar/Navbar';
import DrawerComponent from '../Components/DrawerComponent/DrawerComponent';
import OpenSideBarBtn from '../Components/OpenSideBarBtn';
import { Board } from './index';
import { auth, db } from '../fireBase/fireBase';

export default function HomeLayout() {
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user === null) navigate('/login');
    });
  }, []);
  useEffect(() => {
    const dbRef = ref(db, 'users/userId');
    return onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      if (snapshot.exists()) {
        console.log(data);
      } else console.log('no data');
    });
  }, []);
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
