import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import { ListItem, ListItemButton } from '@mui/joy';
import { useDispatch } from 'react-redux';
import { setCurrent } from '../../features/drawer/drawerSlice';

export default function BoardItem({ name, active, id }) {
  const dispatch = useDispatch();
  return (
    <ListItem onClick={() => dispatch(setCurrent(id))}>
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
        }}
      >
        <SpaceDashboardOutlinedIcon />
        {name}
      </ListItemButton>
    </ListItem>
  );
}
