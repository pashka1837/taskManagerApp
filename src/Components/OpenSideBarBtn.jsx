import { Button } from '@mui/joy';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDrawer } from '../features/drawer/drawerSlice';

export default function OpenSideBarBtn() {
  const { isOpen } = useSelector((store) => store.drawer);
  const dispatch = useDispatch();

  if (isOpen) return null;
  return (
    <Button
      onClick={() => dispatch(toggleDrawer(true))}
      color="btnPrime"
      variant="solid"
      sx={{
        position: 'absolute',
        left: '-5px',
        bottom: '40px',
        borderTopRightRadius: '25px',
        borderBottomRightRadius: '25px',
        zIndex: '100',
        display: { xs: 'none', sm: 'inline-flex' },
      }}
    >
      <VisibilityIcon />
    </Button>
  );
}
