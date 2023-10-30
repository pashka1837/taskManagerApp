import Task from '../Task/Task';
import './Column.css';

export default function Column({ name, tasks }) {
  if (!tasks.length) return null;
  return (
    <div className="columnContainer">
      <h3 className="columnTitle">
        {name}
        {' '}
        (
        {tasks.length}
        )
      </h3>
      <div className="tasksContainer">
        {tasks.map((task) => <Task key={task.name} {...task} />)}
      </div>
    </div>
  );
}
