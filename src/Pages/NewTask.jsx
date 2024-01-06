/* eslint-disable quote-props */
import { redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { addTask } from '../features/drawer/drawerSlice';
import { ModalBG, ManageTask } from '../Components/Modals/index';
import { addTaskDB } from '../utils/dbActions';
import Loader from '../Components/Loader/Loader';

export function action(store) {
  return async ({ request }) => {
    const formData = await request.formData();
    const subtasks = JSON.parse(formData.get('subtasks')).map((st) => ({ id: st.id, title: st.name, isCompleted: st.isCompleted || false }));
    const newTask = {
      id: nanoid(),
      title: formData.get('taskName'),
      description: formData.get('desc') || '',
      status: formData.get('status'),
      subtasks,
    };

    await addTaskDB(store, newTask);
    store.dispatch(addTask(newTask));

    return redirect('/');
  };
}

export default function NewTask() {
  const { current } = useSelector((store) => store.drawer);
  const { isLoading } = useSelector((store) => store.db);

  const columns = current.columns.map((col) => ({ name: col.name, id: col.id }));

  const modalTitle = 'Add New Task';

  const inputsTitle = {
    label: 'title',
    placeHolder: 'e.g. Take coffee break',
    defaultValue: '',
  };

  const inputDesc = {
    label: 'description',
    placeHolder: 'e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little.',
    defaultValue: '',
  };

  const inputsSub = {
    label: 'subtasks',
    inputValues: [{
      id: nanoid(), name: '', placeHolder: 'e.g. Make coffee',
    }, {
      id: nanoid(), name: '', placeHolder: 'e.g. Drink coffee & smile',
    }],
    btnValue: 'Add New Subtask',
  };

  const selectComp = {
    label: 'status',
    defaultValue: columns?.at(0)?.id,
    selectValues: columns,
  };

  const mainBtnValue = 'Create Task';

  return (
    <ModalBG>
      {isLoading && <Loader />}

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
