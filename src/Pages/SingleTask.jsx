import { redirect, useLocation } from 'react-router-dom';
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
      subtasks: JSON.parse(formData.get('subTasks')),
      curStatus: formData.get('status'),
    };
    store.dispatch(changeTaskStatus(taskInfo));
    return redirect('/');
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
    defaultValue: columnID,
    selectValues: current.columns,
  };

  return (
    <ModalBG formRef={formRef}>
      <SingleTaskComp
        task={task}
        selectComp={selectComp}
        formRef={formRef}
        columnID={columnID}
      />
    </ModalBG>
  );
}
