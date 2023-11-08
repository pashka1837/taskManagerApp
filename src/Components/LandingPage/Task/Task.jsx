import {
  Card, CardContent, Typography, useColorScheme,
} from '@mui/joy';
import './Task.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { subtasksDone } from '../../../utils';
import { setCurColumn, setCurTask } from '../../../features/drawer/drawerSlice';

export default function Task({ task, columnID }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { mode } = useColorScheme();
  const { subtasks, title, id } = task;

  // let finnishedSubTasks = 0;
  // if (subtasks.length) {
  //   subtasks.forEach((st) => {
  //     if (st.isCompleted) finnishedSubTasks += 1;
  //   });
  // }
  function openTask() {
    dispatch(setCurTask(id));
    dispatch(setCurColumn(columnID));
    navigate('/task');
  }

  return (
    <Card
      onClick={openTask}
      variant="plain"
      sx={{ boxShadow: mode === 'dark' && 'none' }}
    >
      <CardContent>
        <Typography
          level="body-lg"
          sx={{
            color: 'textPrime',
            fontWeight: '700',
            lineHeight: '1.2em',
          }}
        >
          {title}
        </Typography>

        <Typography
          level="body-md"
          sx={{
            color: 'textSecon',
            fontWeight: '600',
          }}
        >
          {
              subtasks.length
                ? `${subtasksDone(subtasks)} of ${subtasks.length} subtasks`
                : 'No subtasks'
            }
        </Typography>
      </CardContent>
    </Card>
  );
}