import {
  Card, CardContent, Typography, useColorScheme,
} from '@mui/joy';
import './Task.css';

export default function Task({ task }) {
  const { mode } = useColorScheme();
  const { subtasks, title } = task;

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
                ? `${finnishedSubTasks} of ${subtasks.length} subtasks`
                : 'No subtasks'
            }
        </Typography>
      </CardContent>
    </Card>
  );
}
