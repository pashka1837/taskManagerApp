import {
  Button, Sheet, Stack, Typography,
} from '@mui/joy';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { deleteBoard, deleteTask } from '../../features/drawer/drawerSlice';

export default function DeleteCompon() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    title, text, deleteFN,
  } = location.state;

  function deleteFunc() {
    if (deleteFN === 'board') {
      dispatch(deleteBoard());
    } else if (deleteFN === 'task') dispatch(deleteTask());
    navigate('/');
  }
  return (
    <Sheet
      sx={{
        padding: '2%',
        width: '25%',
        minWidth: '305px',
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
