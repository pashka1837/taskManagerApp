import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/joy';
import './DrawerComponent.css';
import {
  HideDrawerBtn, ChangeThemeBtn, DrawerList, LogOutBtn,
} from './index';

export default function DrawerComponent() {
  const { boards } = useSelector((store) => store.drawer);
  return (
    <Box
      className="drawer"
    >
      <Typography
        sx={{
          color: 'textSecon',
          pl: '1em',
          letterSpacing: '3px',
          fontWeight: '600',
          textTransform: 'uppercase',
          caretColor: 'transparent',
        }}
      >
        ALL BOARDS (
        {boards.length}
        )
      </Typography>
      <DrawerList />
      <HideDrawerBtn />
      <ChangeThemeBtn />
      <LogOutBtn />
    </Box>

  );
}
