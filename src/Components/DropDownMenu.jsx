import {
  Dropdown, IconButton, Menu, MenuButton, MenuItem,
} from '@mui/joy/';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';

export default function DropDownMenu() {
  const navigate = useNavigate();
  return (
    <Dropdown>
      <MenuButton
        slots={{ root: IconButton }}
        slotProps={{ root: { variant: 'plain', color: 'neutral' } }}
      >
        <MoreVertIcon />
      </MenuButton>
      <Menu>
        <MenuItem onClick={() => navigate('/edit-board')} color="dropDownEdit" variant="plain">Edit Board</MenuItem>
        <MenuItem onClick={() => navigate('/delete-board')} color="dropDownDelete" variant="plain">Delete Board</MenuItem>
      </Menu>
    </Dropdown>
  );
}
