import { redirect, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Modal from '../Components/Modal';
import { editBoard } from '../features/drawer/drawerSlice';

export function action(store) {
  return async ({ request }) => {
    const formData = await request.formData();
    const columns = formData.getAll('columns').map((col) => ({ name: col, tasks: [] }));
    const editedBoard = {
      name: formData.get('board name'),
      columns: columns.length ? columns : [{ name: 'Todo', tasks: [] }, { name: 'Doing', tasks: [] }, { name: 'Done', tasks: [] }],
    };
    store.dispatch(editBoard(editedBoard));
    return redirect('/');
  };
}

export default function EditBoard() {
  const navigate = useNavigate();
  const { current } = useSelector((store) => store.drawer);
  const columns = current.columns.map((c, i) => ({ id: i, name: c.name }));

  const boardNewModal = {
    title: 'Edit Board',
    label1: 'board name',
    label1Name: current.name,
    label1PlaceHolder: 'e.g. Web Design',
    label3: 'columns',
    btnSubTitle: 'Add New Column',
    btnMainTitle: 'Save Changes',
    inputValues: current.columns.length ? columns : [{ id: 0, name: 'Todo' }, { id: 1, name: 'Doing' }],
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