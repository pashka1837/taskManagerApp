import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import DrawerComponent from '../Components/DrawerComponent/DrawerComponent';

export default function HomeLayout() {
  return (
    <>
      <Navbar />
      <DrawerComponent />
      <Outlet />
    </>

  );
}
