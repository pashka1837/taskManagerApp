/* eslint-disable max-len */
import { redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { editBoard } from '../features/drawer/drawerSlice';
import { ModalBG, ManageBoard } from '../Components/Modals/index';
import { updBoardDB } from '../utils/dbActions';
import Loader from '../Components/Loader/Loader';

export function action(store) {
  return async ({ request }) => {
    const oldColumns = store.getState().drawer.current.columns;
    const formData = await request.formData();
    const columns = JSON.parse(formData.get('columns')).map((col) => ({ id: col.id, name: col.name }));
    const editedBoard = {
      id: store.getState().drawer.current.id,
      name: formData.get('boardName'),
      columns,
    };
    store.dispatch(editBoard(editedBoard));

    await updBoardDB(store, oldColumns);

    return redirect('/');
  };
}

export default function EditBoard() {
  const { current } = useSelector((store) => store.drawer);
  const { isLoading } = useSelector((store) => store.db);

  const columns = current.columns.map((col) => ({ id: col.id, name: col.name }));

  const modalTitle = 'Edit Board';

  const inputsTitle = {
    label: 'board name',
    placeHolder: 'e.g. Web Design',
    defaultValue: current.name,
  };

  const inputsSub = {
    label: 'columns',
    inputValues: columns,
    btnValue: 'Add New Column',
  };

  const mainBtnValue = 'Save Changes';

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
