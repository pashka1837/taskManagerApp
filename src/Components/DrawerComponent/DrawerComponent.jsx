import Drawer from '@mui/joy/Drawer';
import { useState } from 'react';
import './DrawerComponent.css';
import Button from '@mui/joy/Button';

export default function DrawerComponent({ open, toggleDrawer }) {
  return (
    <Drawer sx={{ top: '100px' }} open={open} size="sm">
      <h1>hey</h1>
      <h1>alo</h1>
      <h1>get</h1>
      <Button onClick={toggleDrawer(false)} color="btnSecon" variant="solid"> hide sidebar</Button>
    </Drawer>

  );
}
