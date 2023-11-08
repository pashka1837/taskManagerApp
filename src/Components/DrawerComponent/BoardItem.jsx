import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import { ListItem, ListItemButton } from '@mui/joy';
import { useDispatch } from 'react-redux';
import { setCurrent, toggleMenu } from '../../features/drawer/drawerSlice';

export default function BoardItem({ name, active, id }) {
  const dispatch = useDispatch();
  function handleClick(e) {
    dispatch(setCurrent(id));
    dispatch(toggleMenu(false));
  }
  return (
    <ListItem onClick={handleClick}>
      <ListItemButton
        color={active ? 'btnListSelected' : 'btnList'}
        variant="plain"
        selected={active}
        sx={{
          pl: '1em',
          fontSize: '1em',
          fontWeight: '500',
          paddingY: '0.8em',
          borderTopRightRadius: '25px',
          borderBottomRightRadius: '25px',
          caretColor: 'transparent',
        }}
      >
        <SpaceDashboardOutlinedIcon />
        {name}
      </ListItemButton>
    </ListItem>
  );
}
