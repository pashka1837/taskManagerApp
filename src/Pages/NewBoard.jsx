import { redirect } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { addBoard } from '../features/drawer/drawerSlice';
import { ModalBG, ManageBoard } from '../Components/Modals/index';

export function action(store) {
  return async ({ request }) => {
    const formData = await request.formData();
    const columns = JSON.parse(formData.get('columns')).map((col) => ({ name: col.name, id: col.id }));
    const newBoard = {
      id: nanoid(),
      name: formData.get('boardName'),
      columns,
    };
    store.dispatch(addBoard(newBoard));
    return redirect('/');
  };
}

export default function NewBoard() {
  const modalTitle = 'Add New Board';

  const inputsTitle = {
    label: 'board name',
    placeHolder: 'e.g. Web Design',
    defaultValue: '',
  };

  const inputsSub = {
    label: 'columns',
    inputValues: [{ id: nanoid(), name: 'Todo' }, { id: nanoid(), name: 'Doing' }],
    btnValue: 'Add New Column',
  };

  const mainBtnValue = 'Create New Board';

  return (
    <ModalBG>
      <ManageBoard
        modalTitle={modalTitle}
        inputsTitle={inputsTitle}
        inputsSub={inputsSub}
        mainBtnValue={mainBtnValue}
      />
    </ModalBG>
  );
}
