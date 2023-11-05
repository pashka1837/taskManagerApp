import { redirect } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { addBoard } from '../features/drawer/drawerSlice';
import ModalBG from '../Components/ModalBG';
import ManageBoardComp from '../Components/ManageBoardComp';

export function action(store) {
  return async ({ request }) => {
    const formData = await request.formData();
    const columns = JSON.parse(formData.get('columns'));
    const newBoard = {
      id: nanoid(),
      name: formData.get('boardName'),
      columns: columns.length ? columns : [],
    };
    store.dispatch(addBoard(newBoard));
    return redirect('/');
  };
}

export default function AddNewBoard() {
  const modalTitle = 'Add New Board';

  const inputsTitle = {
    inputName: 'boardName',
    label: 'board name',
    placeHolder: 'e.g. Web Design',
    defaultValue: '',
  };

  const inputsSub = {
    label: 'columns',
    inputName: 'column',
    inputValues: [{ id: nanoid(), name: 'Todo' }, { id: nanoid(), name: 'Doing' }],
    btnValue: 'Add New Column',
  };

  const mainBtnValue = 'Create New Board';

  return (
    <ModalBG>
      <ManageBoardComp
        modalTitle={modalTitle}
        inputsTitle={inputsTitle}
        inputsSub={inputsSub}
        mainBtnValue={mainBtnValue}
      />
    </ModalBG>
  );
}
