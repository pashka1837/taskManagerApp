import { Typography } from '@mui/joy';
import Task from '../Task/Task';
import './Column.css';

export default function Column({ name, tasks }) {
  return (
    <div className="columnContainer">
      <Typography
        level="h5"
        sx={{
          color: 'textSecon',
          paddingBottom: '1.5em',
          letterSpacing: '3px',
          fontWeight: '600',
          textTransform: 'uppercase',
        }}
      >
        {name}
        {' '}
        (
        {tasks.length}
        )
      </Typography>
      <div className="tasksContainer">
        { tasks.map((task) => <Task key={task.title} task={task} />)}
      </div>
    </div>
  );
}
