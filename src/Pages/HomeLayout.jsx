import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';

export default function HomeLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>

  );
}
