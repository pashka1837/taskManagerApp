import { redirect, useNavigate } from 'react-router-dom';
import Modal from '../Components/Modal';
import { addBoard } from '../features/drawer/drawerSlice';

export function action(store) {
  return async ({ request }) => {
    const formData = await request.formData();
    const columns = formData.getAll('columns').map((col) => ({ name: col, tasks: [] }));
    const newBoard = {
      name: formData.get('board name'),
      columns: [...columns],
    };
    store.dispatch(addBoard(newBoard));
    return redirect('/');
  };
}

export default function AddNewBoard() {
  const navigate = useNavigate();

  const boardNewModal = {
    title: 'Add New Board',
    label1: 'board name',
    label1PlaceHolder: 'e.g. Web Design',
    label3: 'columns',
    btnSubTitle: 'Add New Column',
    btnMainTitle: 'Create New Board',
    inputValues: [{ id: 0, name: 'Todo' }, { id: 1, name: 'Doing' }],
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
      <Modal modalData={boardNewModal} />
    </div>
  );
}
