import { useLocation } from 'react-router-dom';
import { useRef } from 'react';
import ModalBG from '../Components/ModalBG';
import SingleTaskComp from '../Components/SingleTaskComp';
import { changeTaskStatus } from '../features/drawer/drawerSlice';

export function action(store) {
  return async ({ request }) => {
    const formData = await request.formData();
    const taskInfo = {
      columnName: formData.get('columnName'),
      taskId: formData.get('taskId'),
      descr: formData.get('description'),
      subtasks: formData.getAll('subtask'),
      curStatus: formData.get('current status'),
    };
    // const curStatus = formData.get('current status');
    // const subtasks = formData.getAll('subtask');
    // const descr = formData.get('description');
    // const columnName = formData.get('columnName');
    // const taskId = formData.get('taskId');
    // console.log(curStatus, subtasks, descr, columnName, taskId);
    store.dispatch(changeTaskStatus(taskInfo));
    return null;
  };
}
export default function SingleTask() {
  const formRef = useRef();

  const location = useLocation();
  const { id: taskId, columnName } = location.state;

  return (
    <ModalBG formRef={formRef} ids={location.state}>
      <SingleTaskComp taskId={taskId} columnName={columnName} formRef={formRef} />
    </ModalBG>
  );
}
