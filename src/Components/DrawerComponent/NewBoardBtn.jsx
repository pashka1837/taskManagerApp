import Add from '@mui/icons-material/Add';
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import { ListItem, ListItemButton } from '@mui/joy';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toggleDrawer, toggleMenu } from '../../features/drawer/drawerSlice';

export default function NewBoardBtn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function addBoard() {
    dispatch(toggleDrawer(false));
    dispatch(toggleMenu(false));
    navigate('/add-board');
  }
  return (
    <ListItem>
      <ListItemButton
        onClick={addBoard}
        color="btnList"
        variant="soft"
        sx={{
          pl: '1em',
          fontSize: '1em',
          fontWeight: '500',
          paddingY: '0.8em',
        }}
      >
        <SpaceDashboardOutlinedIcon />
        <Add />
        {' '}
        Create New Board
      </ListItemButton>
    </ListItem>
  );
}
