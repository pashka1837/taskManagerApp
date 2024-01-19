import { useDispatch } from 'react-redux';
import Task from '../Task/Task';
import './Column.css';
import { dragAndDrop } from '../../../features/drawer/drawerSlice';
import { updTasksDB } from '../../../utils/dbActions';
import store from '../../../store';
import { Children } from 'react';
import { Box } from '@mui/joy';

export default function Column(props) {
  const {
    tasks, id, children,
  } = props;

  const dispatch = useDispatch();

  async function handleDrop(e) {
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
    await updTasksDB(store);
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
      {children && Children.only(children)}

      {tasks?.length
        ? (
          <Box
            className="tasksContainer"
            sx={{ '&::-webkit-scrollbar': { display: 'none' } }}
          >
            { tasks.map((task) => <Task key={task.id} task={task} columnID={id} />)}
          </Box>
        )
        : null}

    </div>
  );
}
