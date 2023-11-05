import { useLocation } from 'react-router-dom';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import ModalBG from '../Components/ModalBG';
import SingleTaskComp from '../Components/SingleTaskComp';
import { changeTaskStatus } from '../features/drawer/drawerSlice';

export function action(store) {
  return async ({ request }) => {
    const formData = await request.formData();
    const taskInfo = {
      columnID: formData.get('columnID'),
      taskId: formData.get('taskId'),
      // descr: formData.get('description'),
      subtasks: JSON.parse(formData.get('subTasks')),
      curStatus: formData.get('status'),
    };
    // const curStatus = formData.get('current status');
    // const subtasks = formData.getAll('subtask');
    // const descr = formData.get('description');
    // const columnName = formData.get('columnName');
    // const taskId = formData.get('taskId');
    // console.log(curStatus, subtasks, descr, columnName, taskId);
    // store.dispatch(changeTaskStatus(taskInfo));
    console.log(taskInfo);
    return null;
  };
}
export default function SingleTask() {
  const formRef = useRef();

  const location = useLocation();
  const { id: taskId, columnID } = location.state;

  const { current } = useSelector((store) => store.drawer);
  const column = current.columns.find((colum) => colum.id === columnID);
  const task = column.tasks.find((taskk) => taskk.id === taskId);

  const selectComp = {
    label: 'status',
    defaultValue: column?.id,
    selectValues: current.columns,
  };

  return (
    <ModalBG formRef={formRef} ids={location.state}>
      <SingleTaskComp
        task={task}
        selectComp={selectComp}
        formRef={formRef}
        columnID={columnID}
      />
    </ModalBG>
  );
}
