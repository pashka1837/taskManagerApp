import './Navbar.css';
import Add from '@mui/icons-material/Add';
import {
  useColorScheme, Typography, Box, Sheet,
  Button, Stack, Dropdown, MenuButton, IconButton, Menu,
} from '@mui/joy';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useRef } from 'react';
import logoLightSvg from '../../assets/logo-dark.svg';
import logoDarkSvg from '../../assets/logo-light.svg';
import logoMobile from '../../assets/logo-mobile.svg';
import DropDownMenu from '../DropDownMenu';
import DrawerComponent from '../DrawerComponent/DrawerComponent';
import { toggleMenu } from '../../features/drawer/drawerSlice';

export default function Navbar() {
  const navigate = useNavigate();
  const { mode } = useColorScheme();
  const { current, boards, isMenuOpen } = useSelector((store) => store.drawer);
  const menuRef = useRef();
  const dispatch = useDispatch();

  const stateToSend = {
    title: 'Delete this board?',
    text: `Are you sure you want to delete the ‘${current?.name}’ board? This action will remove all columns and tasks and cannot be reversed.`,
    deleteFN: 'board',
    editRoute: '/edit-board',
    btnName: 'Board',
  };
  function handelMenuOpen(e) {
    setTimeout(() => menuRef.current.focus(), 10);
    dispatch(toggleMenu(!isMenuOpen));
  }

  return (
    <Sheet className="navbar">
      <Box className="logoContainer">
        <Stack sx={{ display: { xs: 'none', sm: 'block' } }}>
          <img src={(mode === 'light') ? logoLightSvg : logoDarkSvg} alt="logo" />
        </Stack>
        <Stack sx={{ display: { xs: 'block', sm: 'none' } }}>
          <img src={logoMobile} alt="logo" />
        </Stack>
        <Typography
          fontWeight="700"
          color="textPrime"
          sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' }, caretColor: 'transparent' }}
        >
          {current?.name || ''}
        </Typography>
        <Dropdown open={isMenuOpen} onOpenChange={handelMenuOpen}>
          <MenuButton
            autoFocus
            slots={{ root: IconButton }}
            slotProps={{ root: { variant: 'plain', color: 'neutral' } }}
            sx={{
              '&:hover': { backgroundColor: 'transparent' },
              display: { xs: 'inline-flex', sm: 'none' },
            }}
          >
            {isMenuOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </MenuButton>
          <Menu
            keepMounted
            ref={menuRef}
            className="boardsMenu"
            variant="plain"
            sx={{ display: { xs: 'flex', sm: 'none' }, '&:focus-visible': { border: 'none', outline: 'none' } }}
          >
            <DrawerComponent />
          </Menu>
        </Dropdown>
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
            display: { xs: 'none', sm: 'inline-flex' },
          }}
        >
          Add New Task
        </Button>
        <Button
          onClick={() => navigate('/add-task')}
          color="btnPrime"
          variant="solid"
          disabled={!boards?.length || !current?.columns?.length}
          sx={{
            borderTopRightRadius: '25px',
            borderBottomRightRadius: '25px',
            borderTopLeftRadius: '25px',
            borderBottomLeftRadius: '25px',
            display: { xs: 'inline-flex', sm: 'none' },
          }}
        >
          <Add />
        </Button>
        <DropDownMenu stateToSend={stateToSend} />
      </Box>
    </Sheet>
  );
}
