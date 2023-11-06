import { redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { editBoard } from '../features/drawer/drawerSlice';
import ModalBG from '../Components/ModalBG';
import ManageBoardComp from '../Components/ManageBoardComp';

export function action(store) {
  return async ({ request }) => {
    const formData = await request.formData();
    const columns = JSON.parse(formData.get('columns')).map((col) => ({ id: col.id, name: col.name }));
    const editedBoard = {
      id: store.getState().drawer.current.id,
      name: formData.get('boardName'),
      columns: columns.length ? columns : [],
    };
    store.dispatch(editBoard(editedBoard));
    return redirect('/');
  };
}

export default function EditBoard() {
  const { current } = useSelector((store) => store.drawer);
  const columns = current.columns.map((col) => ({ id: col.id, name: col.name }));

  const modalTitle = 'Edit Board';

  const inputsTitle = {
    label: 'board name',
    placeHolder: 'e.g. Web Design',
    defaultValue: current.name,
  };

  const inputsSub = {
    label: 'columns',
    inputValues: columns.length ? columns : [],
    btnValue: 'Add New Column',
  };

  const mainBtnValue = 'Save Changes';

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
