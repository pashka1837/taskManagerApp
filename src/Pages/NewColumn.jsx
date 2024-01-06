/* eslint-disable max-len */
/* eslint-disable quote-props */
import { redirect } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import { addColumns } from '../features/drawer/drawerSlice';
import { ModalBG, AddColumns } from '../Components/Modals/index';
import Loader from '../Components/Loader/Loader';
import { addColumnsDB } from '../utils/dbActions';

export function action(store) {
  return async ({ request }) => {
    const formData = await request.formData();
    const columns = JSON.parse(formData.get('columns')).map((col) => ({ id: col.id, name: col.name, tasks: [] }));

    await addColumnsDB(store, columns);
    store.dispatch(addColumns(columns));
    return redirect('/');
  };
}

export default function NewColumn() {
  const { isLoading } = useSelector((store) => store.db);
  const modalTitle = 'Add New Column';

  const inputsSub = {
    label: 'columns',
    inputValues: [{ id: nanoid(), name: '' }],
    btnValue: 'Add New Column',
  };

  const mainBtnValue = 'Save Changes';

  return (
    <ModalBG>
      {isLoading && <Loader />}
      <AddColumns
        modalTitle={modalTitle}
        inputsSub={inputsSub}
        mainBtnValue={mainBtnValue}
      />
    </ModalBG>
  );
}
