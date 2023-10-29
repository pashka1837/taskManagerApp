import './Navbar.css';
import Button from '@mui/joy/Button';
import Add from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/joy/Box';
import Sheet from '@mui/joy/Sheet';
import { useDispatch } from 'react-redux';
import { Typography } from '@mui/material';
import logoSvg from '../../assets/logo-dark.svg';
import { toggleDrawer } from '../../features/drawer/drawerSlice';

export default function Navbar() {
  const dispatch = useDispatch();
  return (
    <Sheet className="navbar">
      <Box className="logoContainer">
        <img src={logoSvg} alt="logo" />
        <Typography level="h1" fontSize="xl">Platform Launch</Typography>
        <h2>Platform Launch</h2>
      </Box>

      <Box className="btnContainer">
        <Button onClick={() => dispatch(toggleDrawer())} color="btnPrime" variant="solid" startDecorator={<Add />}> Add New Task</Button>
        <MoreVertIcon onClick={() => console.log('hey')} className="MoreVertBtn" />
      </Box>
    </Sheet>
  );
}
