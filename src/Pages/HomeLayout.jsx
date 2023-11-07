import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import DrawerComponent from '../Components/DrawerComponent/DrawerComponent';
import OpenSideBarBtn from '../Components/OpenSideBarBtn';
import Landing from './Landing';

export default function HomeLayout() {
  return (
    <>
      <Navbar />
      <DrawerComponent />
      <OpenSideBarBtn />
      <Landing />
      <Outlet />
    </>

  );
}
