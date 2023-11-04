import { redirect, useNavigate } from 'react-router-dom';
import Modal from '../Components/Modal';
import { addBoard } from '../features/drawer/drawerSlice';
import ModalBG from '../Components/ModalBG';

export function action(store) {
  return async ({ request }) => {
    const formData = await request.formData();
    const columns = formData.getAll('columns').map((col) => ({ name: col, tasks: [] }));
    const newBoard = {
      name: formData.get('board name'),
      columns: columns.length ? columns : [{ name: 'Todo', tasks: [] }, { name: 'Doing', tasks: [] }, { name: 'Done', tasks: [] }],
    };
    console.log(newBoard);
    store.dispatch(addBoard(newBoard));
    return redirect('/');
  };
}

export default function AddNewBoard() {
  const boardNewModal = {
    title: 'Add New Board',
    label1: 'board name',
    label1PlaceHolder: 'e.g. Web Design',
    label3: 'columns',
    btnSubTitle: 'Add New Column',
    btnMainTitle: 'Create New Board',
    inputValues: [{ id: 0, name: 'Todo' }, { id: 1, name: 'Doing' }],
  };

  return (
    <ModalBG>
      <Modal modalData={boardNewModal} />
    </ModalBG>
  );
}
