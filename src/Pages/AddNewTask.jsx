import { redirect, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { addTask } from '../features/drawer/drawerSlice';
import Modal from '../Components/Modal';

export function action(store) {
  return async ({ request }) => {
    const formData = await request.formData();
    const subtasks = formData.getAll('subtasks').map((sub) => ({ title: sub, isCompleted: false }));
    const status = formData.get('status');
    const newTask = {
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
  const navigate = useNavigate();
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

  function handleClickOutside(e) {
    if (e.currentTarget === e.target) navigate('/');
  }

  return (
    <div
      onClick={handleClickOutside}
      style={{
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        display: 'grid',
        placeItems: 'center',
        gridTemplateColumns: '1fr',
        backgroundColor: ' rgba(1, 1, 1, 0.6)',
        zIndex: '1600',
      }}
    >
      <Modal modalData={taskNewModal} />
    </div>
  );
}
