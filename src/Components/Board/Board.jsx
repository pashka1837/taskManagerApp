import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import {
  ListItem, ListItemButton, ListItemDecorator,
} from '@mui/joy';
import { useDispatch } from 'react-redux';
import { setCurrent } from '../../features/drawer/drawerSlice';

export default function Board({ name, active }) {
  const dispatch = useDispatch();
  return (
    <ListItem onClick={() => dispatch(setCurrent(name))}>
      <ListItemButton
        color={active ? 'btnListSelected' : 'btnList'}
        variant="plain"
        sx={{
          paddingLeft: '1em',
          fontSize: '1em',
          fontWeight: '500',
          paddingY: '1em',
          borderTopRightRadius: '25px',
          borderBottomRightRadius: '25px',
        }}
        selected={active}
      >
        <ListItemDecorator sx={{ paddingRight: '1em' }}>
          <SpaceDashboardOutlinedIcon />
        </ListItemDecorator>
        {name}
      </ListItemButton>
    </ListItem>
  );
}
