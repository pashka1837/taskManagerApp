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

  function openTask(e) {
    e.stopPropagation();
    dispatch(setCurTask(id));
    dispatch(setCurColumn(columnID));
    navigate('/task');
  }
  function handleDrag(e) {
    e.preventDefault();
    // console.log(e.target.dataset.id, e.currentTarget);
    e.dataTransfer.setData('text/plain', e.target.dataset.id);
    e.dataTransfer.effectAllowed = 'move';
    // e.dataTransfer.dropEffect = 'move';
    // console.log('onDrag');
    dispatch(setCurTask(id));
    dispatch(setCurColumn(columnID));
  }

  return (
    <Card
      draggable
      // onDrop={handleDrop}
      onDrag={handleDrag}
      // onDragOver={handleDragOver}
      onClick={openTask}
      data-id={id}
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
            caretColor: 'transparent',
          }}
        >
          {title}
        </Typography>

        <Typography
          level="body-md"
          sx={{
            color: 'textSecon',
            fontWeight: '600',
            caretColor: 'transparent',
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
