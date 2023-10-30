import { Card, CardContent } from '@mui/joy';

import './Task.css';

export default function Task({
  description, status, subtasks, title,
}) {
  let finnishedSubTasks = 0;
  if (subtasks.length) {
    subtasks.forEach((st) => {
      if (st.isCompleted) finnishedSubTasks += 1;
    });
  }
  return (
    <Card variant="plain">
      <CardContent>
        <h4 className="taskTitle">
          {title}
        </h4>
        {subtasks.length
          ? (
            <h6 className="subTasksQ">
              {finnishedSubTasks}
              {' '}
              of
              {' '}
              {subtasks.length}
              {' '}
              subtasks
            </h6>
          )
          : <h6 className="subTasksQ">No subtasks</h6> }
      </CardContent>
    </Card>
  );
}
