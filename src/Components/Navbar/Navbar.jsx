import './Navbar.css';
import Add from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
  useColorScheme, Typography, Box, Sheet, Button,
} from '@mui/joy';
import { useNavigate } from 'react-router-dom';
import logoLightSvg from '../../assets/logo-dark.svg';
import logoDarkSvg from '../../assets/logo-light.svg';
import DropDownMenu from '../DropDownMenu';

export default function Navbar() {
  const navigate = useNavigate();
  const { mode } = useColorScheme();
  return (
    <Sheet className="navbar">
      <Box className="logoContainer">
        <img src={(mode === 'light') ? logoLightSvg : logoDarkSvg} alt="logo" />
        <Typography
          level="h3"
          fontWeight="700"
          color="textPrime"
        >
          Platform Launch
        </Typography>
      </Box>

      <Box className="btnContainer">
        <Button
          onClick={() => navigate('/add-task')}
          color="btnPrime"
          variant="solid"
          startDecorator={<Add />}
          sx={{
            borderTopRightRadius: '25px',
            borderBottomRightRadius: '25px',
            borderTopLeftRadius: '25px',
            borderBottomLeftRadius: '25px',
          }}
        >
          Add New Task
        </Button>
        <DropDownMenu />
        {/* <MoreVertIcon onClick={() => console.log('hey')} className="MoreVertBtn" /> */}
      </Box>
    </Sheet>
  );
}
