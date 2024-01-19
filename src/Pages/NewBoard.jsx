import { redirect } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import { ModalBG, ManageBoard } from '../Components/Modals/index';
import Loader from '../Components/Loader/Loader';
import { addBoardDB } from '../utils/dbActions';

export function action(store) {
  return async ({ request }) => {
    const formData = await request.formData();
    const columns = JSON.parse(formData.get('columns')).map((col) => ({ name: col.name, id: col.id, tasks: [] }));

    const board = {
      id: nanoid(),
      name: formData.get('boardName'),
    };
    await addBoardDB(store, board, columns);
    return redirect('/');
  };
}

export default function NewBoard() {
  const { isLoading } = useSelector((store) => store.db);

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
      {isLoading && <Loader />}
      <ManageBoard
        modalTitle={modalTitle}
        inputsTitle={inputsTitle}
        inputsSub={inputsSub}
        mainBtnValue={mainBtnValue}
      />
    </ModalBG>
  );
}
