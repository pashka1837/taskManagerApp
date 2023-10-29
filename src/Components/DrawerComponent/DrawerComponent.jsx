import Drawer from '@mui/joy/Drawer';
import './DrawerComponent.css';
import { useDispatch, useSelector } from 'react-redux';
import { Box, List } from '@mui/material';
import { Button } from '@mui/joy';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { toggleDrawer } from '../../features/drawer/drawerSlice';
import Board from '../Board/Board';

export default function DrawerComponent() {
  const { isOpen, boards, current } = useSelector((store) => store.drawer);
  const dispatch = useDispatch();

  return (
    <Drawer open={isOpen}>
      <Box className="drawer">
        <h4 style={{
          fontWeight: '500', color: '#828FA3', paddingLeft: '1em', letterSpacing: '3px',
        }}
        >
          ALL BOARDS (
          {boards.length}
          )
        </h4>
        <List size="lg">
          {boards.length
            ? boards.map((board) => (
              <Board
                key={board.name}
                active={board.name === current.name}
                name={board.name}
              />
            ))
            : null}
        </List>
        <Button
          sx={{
            alignSelf: 'end',
            borderTopRightRadius: '25px',
            borderBottomRightRadius: '25px',
            textAlign: 'start',
          }}
          onClick={() => dispatch(toggleDrawer())}
          color="btnList"
          variant="plain"
          startDecorator={<VisibilityOffOutlinedIcon />}
        >
          Hide Sidebar
        </Button>
      </Box>

    </Drawer>

  );
}
