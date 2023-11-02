import './Navbar.css';
import Button from '@mui/joy/Button';
import Add from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/joy/Box';
import Sheet from '@mui/joy/Sheet';
import { useDispatch } from 'react-redux';
import { Typography } from '@mui/material';
import { useColorScheme } from '@mui/joy';
import { useNavigate } from 'react-router-dom';
import logoLightSvg from '../../assets/logo-dark.svg';
import logoDarkSvg from '../../assets/logo-light.svg';
import { toggleDrawer } from '../../features/drawer/drawerSlice';

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { mode } = useColorScheme();
  return (
    <Sheet className="navbar">
      <Box className="logoContainer">
        <img src={(mode === 'light') ? logoLightSvg : logoDarkSvg} alt="logo" />
        {/* <Typography level="h1" fontSize="xl">Platform Launch</Typography> */}
        <h2>Platform Launch</h2>
      </Box>

      <Box className="btnContainer">
        <Button onClick={() => navigate('/add-task')} color="btnPrime" variant="solid" startDecorator={<Add />}> Add New Task</Button>
        <MoreVertIcon onClick={() => console.log('hey')} className="MoreVertBtn" />
      </Box>
    </Sheet>
  );
}
