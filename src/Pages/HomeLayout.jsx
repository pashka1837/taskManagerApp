import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import DrawerComponent from '../Components/DrawerComponent/DrawerComponent';
import OpenSideBarBtn from '../Components/OpenSideBarBtn';

export default function HomeLayout() {
  return (
    <>
      <Navbar />
      <DrawerComponent />
      <OpenSideBarBtn />
      <Outlet />
    </>

  );
}
