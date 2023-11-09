import { Outlet } from 'react-router-dom';
import { Drawer } from '@mui/joy';
import { useSelector } from 'react-redux';
import Navbar from '../Components/Navbar/Navbar';
import DrawerComponent from '../Components/DrawerComponent/DrawerComponent';
import OpenSideBarBtn from '../Components/OpenSideBarBtn';
import { Board } from './index';

export default function HomeLayout() {
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
