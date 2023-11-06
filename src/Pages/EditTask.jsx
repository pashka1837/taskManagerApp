import { redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { editTask } from '../features/drawer/drawerSlice';
import ModalBG from '../Components/ModalBG';
import ManageTask from '../Components/ManageTask';

export function action(store) {
  return async ({ request }) => {
    const formData = await request.formData();
    const subtasks = JSON.parse(formData.get('subtasks')).map((st) => ({ id: st.id, title: st.name, isCompleted: st.isCompleted || false }));
    const newTask = {
      title: formData.get('taskName'),
      description: formData.get('desc'),
      status: formData.get('status'),
      subtasks: subtasks.length ? subtasks : [],
    };
    store.dispatch(editTask(newTask));
    return redirect('/');
  };
}

export default function EditTask() {
  const { current, currentTask, currentColumn } = useSelector((store) => store.drawer);
  const columns = current.columns.map((col) => ({ name: col.name, id: col.id }));
  const column = current.columns.find((col) => col.id === currentColumn);
  const task = column.tasks.find((taskk) => taskk.id === currentTask);

  const modalTitle = 'Edit Task';

  const inputsTitle = {
    label: 'title',
    placeHolder: 'e.g. Take coffee break',
    defaultValue: task?.title,
  };

  const inputDesc = {
    label: 'description',
    placeHolder: 'e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little.',
    defaultValue: task?.description,
  };

  const inputsSub = {
    label: 'subtasks',
    inputValues: task?.subtasks.map((st) => ({
      name: st.title, id: st.id, isCompleted: st.isCompleted,
    })),
    btnValue: 'Add New Subtask',
  };

  const selectComp = {
    label: 'status',
    defaultValue: currentColumn,
    selectValues: columns,
  };

  const mainBtnValue = 'Save Changes';

  return (
    <ModalBG>
      <ManageTask
        modalTitle={modalTitle}
        inputsTitle={inputsTitle}
        inputDesc={inputDesc}
        inputsSub={inputsSub}
        selectComp={selectComp}
        mainBtnValue={mainBtnValue}
      />
    </ModalBG>
  );
}
