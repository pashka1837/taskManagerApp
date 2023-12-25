import { useDispatch } from 'react-redux';
import { Stack, Typography } from '@mui/joy';
import Task from '../Task/Task';
import './Column.css';
import { dragAndDrop } from '../../../features/drawer/drawerSlice';

export default function Column({
  name, tasks, id, i,
}) {
  const dispatch = useDispatch();
  const bgColor = `rgba(${Math.floor(Math.random() * 355) - 100},${Math.floor(Math.random() * 355) - 100},${Math.floor(Math.random() * 355) - 100}, 1)`;
  // const bgColor = `rgba(${50 + i * 111},${0 + i * 70},${54 + i * 31}, 1)`;

  function handleDrop(e) {
    e.preventDefault();
    const columnTarget = e.currentTarget;
    let taskTarget = e.target;
    let taskTargetId;

    if (!columnTarget.classList.contains('columnContainer')) return;
    const { taskID, columnID } = JSON.parse(e.dataTransfer.getData('text/plain'));

    if (taskTarget.classList.contains('MuiCard-root')) {
      taskTargetId = taskTarget.dataset.id;
    } else if (taskTarget.offsetParent.classList.contains('MuiCard-root')) {
      taskTarget = taskTarget.offsetParent;
      taskTargetId = taskTarget.dataset.id;
    } else taskTargetId = 'none';
    dispatch(dragAndDrop({
      nextColId: id, nextTaskId: taskTargetId, taskID, columnID,
    }));
  }
  function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  }
  return (
    <div
      className="columnContainer"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragEnter={(e) => e.preventDefault()}
    >
      <Stack direction="row" alignItems="center" spacing={2} sx={{ paddingBottom: '1.5em' }}>
        <span style={{
          width: '12px',
          height: '12px',
          borderRadius: '100%',
          backgroundColor: `${bgColor}`,
        }}
        />
        <Typography
          level="h5"
          sx={{
            color: 'textSecon',
            letterSpacing: '3px',
            fontWeight: '600',
            textTransform: 'uppercase',
            caretColor: 'transparent',
          }}
        >
          {name}
          {' '}
          (
          {tasks?.length || '0'}
          )
        </Typography>
      </Stack>

      {tasks?.length
        ? (
          <div className="tasksContainer">
            { tasks.map((task) => <Task key={task.title} task={task} columnID={id} />)}
          </div>
        )
        : null}

    </div>
  );
}
