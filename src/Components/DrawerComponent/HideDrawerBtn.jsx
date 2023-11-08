import { useDispatch } from 'react-redux';
import { Button } from '@mui/joy';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { toggleDrawer } from '../../features/drawer/drawerSlice';

export default function HideDrawerBtn() {
  const dispatch = useDispatch();
  return (
    <Button
      sx={{
        alignSelf: 'end',
        borderTopRightRadius: '25px',
        borderBottomRightRadius: '25px',
        borderTopLeftRadius: '0px',
        borderBottomLeftRadius: '0px',
        textAlign: 'start',
        display: { xs: 'none', sm: 'flex' },
      }}
      onClick={() => dispatch(toggleDrawer(false))}
      color="btnList"
      variant="plain"
      startDecorator={<VisibilityOffOutlinedIcon />}
    >
      Hide Sidebar
    </Button>
  );
}
