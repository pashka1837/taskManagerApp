import { redirect } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { addColumns } from '../features/drawer/drawerSlice';
import ModalBG from '../Components/Modals/ModalBG';
import AddColumns from '../Components/Modals/AddColumns';

export function action(store) {
  return async ({ request }) => {
    const formData = await request.formData();
    const columns = JSON.parse(formData.get('columns')).map((col) => ({ id: col.id, name: col.name }));
    if (columns.length < 1) return redirect('/');
    store.dispatch(addColumns(columns));
    return redirect('/');
  };
}

export default function NewColumn() {
  const modalTitle = 'Add New Column';

  const inputsSub = {
    label: 'columns',
    inputValues: [{ id: nanoid(), name: '' }],
    btnValue: 'Add New Column',
  };

  const mainBtnValue = 'Save Changes';

  return (
    <ModalBG>
      <AddColumns
        modalTitle={modalTitle}
        inputsSub={inputsSub}
        mainBtnValue={mainBtnValue}
      />
    </ModalBG>
  );
}
