import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import DrawerComponent from '../Components/DrawerComponent/DrawerComponent';

export default function HomeLayout() {
  // const dispatch = useDispatch()
  // const isOpen = useSelector((store) => store.drawer.isOpen);
  // console.log(isOpen);

  return (
    <>
      <Navbar />
      <DrawerComponent />
      <Outlet />
    </>

  );
}
