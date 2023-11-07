import './Navbar.css';
import Add from '@mui/icons-material/Add';
import {
  useColorScheme, Typography, Box, Sheet, Button,
} from '@mui/joy';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logoLightSvg from '../../assets/logo-dark.svg';
import logoDarkSvg from '../../assets/logo-light.svg';
import DropDownMenu from '../DropDownMenu';

export default function Navbar() {
  const navigate = useNavigate();
  const { mode } = useColorScheme();
  const { current, boards } = useSelector((store) => store.drawer);

  const stateToSend = {
    title: 'Delete this board?',
    text: `Are you sure you want to delete the ‘${current?.name}’ board? This action will remove all columns and tasks and cannot be reversed.`,
    deleteFN: 'board',
    editRoute: '/edit-board',
    btnName: 'Board',
  };

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
          disabled={!boards?.length || !current?.columns?.length}
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
        <DropDownMenu stateToSend={stateToSend} />
      </Box>
    </Sheet>
  );
}
