import {
  Card, CardContent, Typography, useColorScheme,
} from '@mui/joy';

import './Task.css';

export default function Task({ task }) {
  const { mode, setMode } = useColorScheme();

  const {
    description, status, subtasks, title,
  } = task;

  let finnishedSubTasks = 0;
  if (subtasks.length) {
    subtasks.forEach((st) => {
      if (st.isCompleted) finnishedSubTasks += 1;
    });
  }
  return (
    <Card
      variant="plain"
      sx={{ boxShadow: mode === 'dark' && 'none' }}
    >
      <CardContent>
        <Typography
          sx={{
            color: 'textPrime',
            fontSize: 'm',
            fontWeight: '600',
          }}
        >
          {title}
        </Typography>
        {subtasks.length
          ? (
            <Typography
              sx={{
                color: 'textSecon',
                fontSize: 's',
                fontWeight: '600',
              }}
            >
              {finnishedSubTasks}
              {' '}
              of
              {' '}
              {subtasks.length}
              {' '}
              subtasks
            </Typography>
          )
          : <h6 className="subTasksQ">No subtasks</h6> }
      </CardContent>
    </Card>
  );
}
