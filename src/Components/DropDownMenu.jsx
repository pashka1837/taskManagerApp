import {
  Dropdown, IconButton, Menu, MenuButton, MenuItem,
} from '@mui/joy/';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';

export default function DropDownMenu({ stateToSend }) {
  const navigate = useNavigate();

  return (
    <Dropdown>
      <MenuButton
        slots={{ root: IconButton }}
        slotProps={{ root: { variant: 'plain', color: 'neutral' } }}
        sx={{ '&:hover': { backgroundColor: 'transparent' } }}
      >
        <MoreVertIcon />
      </MenuButton>
      <Menu>
        <MenuItem
          onClick={() => navigate(stateToSend.editRoute)}
          color="dropDownEdit"
          variant="plain"
        >
          Edit
          {' '}
          {stateToSend.btnName}
        </MenuItem>
        <MenuItem
          onClick={() => navigate('/delete', { state: stateToSend })}
          color="dropDownDelete"
          variant="plain"
        >
          Delete
          {' '}
          {stateToSend.btnName}
        </MenuItem>
      </Menu>
    </Dropdown>
  );
}
