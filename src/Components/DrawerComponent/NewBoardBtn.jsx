import Add from '@mui/icons-material/Add';
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import { ListItem, ListItemButton } from '@mui/joy';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBoard } from '../../features/drawer/drawerSlice';

export default function NewBoardBtn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <ListItem>
      <ListItemButton
        onClick={() => navigate('/add-board')}
        color="btnList"
        variant="soft"
        sx={{
          paddingLeft: '2em',
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
