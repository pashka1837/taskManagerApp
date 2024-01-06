import {
  Button, Sheet, Stack, Typography,
} from '@mui/joy';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { deleteBoard, deleteTask } from '../../features/drawer/drawerSlice';
import { deleteBoardDB, updTasksDB } from '../../utils/dbActions';
import store from '../../store';

export default function DeleteCompon() {
  const { current: oldBoard } = useSelector((stor) => stor.drawer);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    title, text, deleteFN,
  } = location.state;

  async function deleteFunc() {
    if (deleteFN === 'board') {
      dispatch(deleteBoard());
      await deleteBoardDB(store, oldBoard);
    } else if (deleteFN === 'task') {
      dispatch(deleteTask());
      await updTasksDB(store);
    }
    navigate('/');
  }
  return (
    <Sheet
      sx={{
        p: 4,
        width: {
          xs: '90%', sm: '50%', md: '35%', lg: '30%', xl: '25%',
        },
        borderRadius: '9px',
      }}
    >
      <Stack spacing={2}>
        <Typography level="h4" fontWeight="600" sx={{ color: 'dangerColor' }}>
          {title}
        </Typography>
        <Typography
          level="body-sm"
          sx={{
            color: 'textSecon',
            fontWeight: '400',
          }}
        >
          {text}
        </Typography>
        <Stack spacing={2} direction="row" alignItems="center">
          <Button
            onClick={deleteFunc}
            color="btnDanger"
            variant="solid"
            sx={{
              borderTopRightRadius: '25px',
              borderBottomRightRadius: '25px',
              borderTopLeftRadius: '25px',
              borderBottomLeftRadius: '25px',
              width: '100%',
            }}
          >
            Delete
          </Button>
          <Button
            onClick={() => navigate('/')}
            color="btnSecon"
            variant="solid"
            sx={{
              borderTopRightRadius: '25px',
              borderBottomRightRadius: '25px',
              borderTopLeftRadius: '25px',
              borderBottomLeftRadius: '25px',
              width: '100%',
            }}
          >
            Cancel
          </Button>
        </Stack>
      </Stack>

    </Sheet>
  );
}
