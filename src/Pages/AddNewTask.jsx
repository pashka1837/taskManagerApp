import { redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { addTask } from '../features/drawer/drawerSlice';
import Modal from '../Components/Modal';
import ModalBG from '../Components/ModalBG';

export function action(store) {
  return async ({ request }) => {
    const formData = await request.formData();
    const subtasks = formData.getAll('subtasks').map((sub) => ({ title: sub, isCompleted: false }));
    const status = formData.get('status');
    const newTask = {
      id: nanoid(),
      title: formData.get('title'),
      description: formData.get('description'),
      status,
      subtasks: subtasks.length ? subtasks : [],
    };
    store.dispatch(addTask(newTask));
    return redirect('/');
  };
}

export default function AddNewTask() {
  const { current } = useSelector((store) => store.drawer);
  const columns = current.columns.map((c) => c.name.charAt(0) + c.name.slice(1));

  const taskNewModal = {
    title: 'Add New Task',
    label1: 'title',
    label1PlaceHolder: 'e.g. Take coffee break',
    label2: 'description',
    label2PlaceHolder: 'e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little.',
    label3: 'subtasks',
    label4: 'status',
    statusOptions: columns.length ? columns : ['Todo', 'Doing', 'Done'],
    btnSubTitle: 'Add New Subtask',
    btnMainTitle: 'Create Task',
    inputValues: [{ id: 0, name: '', plcHolder: 'e.g. Make coffee' }, { id: 1, name: '', plcHolder: 'e.g. Drink coffee & smile' }],
  };

  return (
    <ModalBG>
      <Modal modalData={taskNewModal} />
    </ModalBG>
  );
}
