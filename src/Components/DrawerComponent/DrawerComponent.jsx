import Drawer from '@mui/joy/Drawer';
import { useSelector } from 'react-redux';
import { Box } from '@mui/joy';
import './DrawerComponent.css';
import DrawerList from './DrawerList';
import HideDrawerBtn from './HideDrawerBtn';
import ChangeThemeBtn from './ChangeThemeBtn';

export default function DrawerComponent() {
  const { isOpen, boards } = useSelector((store) => store.drawer);
  return (
    <Drawer disableEnforceFocus open={isOpen}>
      <Box className="drawer">
        <h4 className="drawerTitle">
          ALL BOARDS (
          {boards.length}
          )
        </h4>
        <DrawerList />
        <ChangeThemeBtn />
        <HideDrawerBtn />
      </Box>
    </Drawer>
  );
}
