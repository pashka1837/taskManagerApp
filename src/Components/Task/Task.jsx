import {
  Card, CardContent, Typography, useColorScheme,
} from '@mui/joy';
import './Task.css';
import { useNavigate } from 'react-router-dom';
import { subtasksDone } from '../../utils';

export default function Task({ task, columnName }) {
  const navigate = useNavigate();
  const { mode } = useColorScheme();
  const { subtasks, title, id } = task;

  // let finnishedSubTasks = 0;
  // if (subtasks.length) {
  //   subtasks.forEach((st) => {
  //     if (st.isCompleted) finnishedSubTasks += 1;
  //   });
  // }
  function openTask() {
    const stateToSend = {
      id,
      columnName,
    };
    navigate('/task', { state: stateToSend });
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
