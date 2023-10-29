import './Navbar.css';
import Button from '@mui/joy/Button';
import Add from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/joy/Box';
import Sheet from '@mui/joy/Sheet';
import logoSvg from '../../assets/logo-dark.svg';

export default function Navbar() {
  return (
    <Sheet className="navbar">
      <Box className="logoContainer">
        <img src={logoSvg} alt="logo" />
        <h2>Platform Launch</h2>
      </Box>

      <Box className="btnContainer">
        <Button onClick={() => console.log('hey2')} color="btnPrime" variant="solid" startDecorator={<Add />}> Add New Task</Button>
        <MoreVertIcon onClick={() => console.log('hey')} className="MoreVertBtn" />
      </Box>
    </Sheet>
  );
}
