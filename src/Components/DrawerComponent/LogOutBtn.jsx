import { Button } from '@mui/joy';
import LogoutIcon from '@mui/icons-material/Logout';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { enableNetwork, waitForPendingWrites } from 'firebase/firestore';
import { auth, db } from '../../fireBase/fireBase';
import { setUser } from '../../features/db/dbSlice';

export default function LogOutBtn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  async function handleSignOut() {
    try {
      await enableNetwork(db);
      await waitForPendingWrites(db);
      await signOut(auth);
      console.log('sign out');
      dispatch(setUser(null));
      navigate('/login');
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  }
  return (
    <Button
      onClick={handleSignOut}
      color="btnList"
      variant="soft"
      endDecorator={<LogoutIcon />}
      sx={{
        pl: '1em',
        fontSize: '1em',
        fontWeight: '500',
        paddingY: '0.8em',
        caret: 'none',
      }}
    >
      Log Out
    </Button>
  );
}
