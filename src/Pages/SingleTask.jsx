import { redirect } from 'react-router-dom';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { ModalBG, SingleTaskComp } from '../Components/Modals/index';
import { changeTaskStatus } from '../features/drawer/drawerSlice';

export function action(store) {
  return async ({ request }) => {
    const formData = await request.formData();
    const taskInfo = {
      columnID: formData.get('columnID'),
      taskId: formData.get('taskId'),
      subtasks: JSON.parse(formData.get('subTasks')),
      curStatus: formData.get('status'),
    };
    store.dispatch(changeTaskStatus(taskInfo));
    return redirect('/');
  };
}
export default function SingleTask() {
  const formRef = useRef();
  const {
    currentTask: taskId,
    currentColumn: columnID, current,
  } = useSelector((store) => store.drawer);

  const column = current.columns.find((colum) => colum.id === columnID);
  const task = column.tasks.find((taskk) => taskk.id === taskId);

  const selectComp = {
    label: 'Current Status',
    defaultValue: columnID,
    selectValues: current.columns,
  };

  const stateToSend = {
    title: 'Delete this task?',
    text: `Are you sure you want to delete the ‘${task.title}’ task and its subtasks? This action cannot be reversed.`,
    deleteFN: 'task',
    editRoute: '/edit-task',
    btnName: 'Task',
  };

  return (
    <ModalBG formRef={formRef}>
      <SingleTaskComp
        task={task}
        selectComp={selectComp}
        formRef={formRef}
        columnID={columnID}
        stateToSend={stateToSend}
      />
    </ModalBG>
  );
}
