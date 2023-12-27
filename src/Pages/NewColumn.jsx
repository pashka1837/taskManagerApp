/* eslint-disable quote-props */
import { redirect } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { addColumns } from '../features/drawer/drawerSlice';
import { ModalBG, AddColumns } from '../Components/Modals/index';
import { setColumnsDoc } from '../utils';
import { addDataDB } from '../features/db/dbSlice';
import Loader from '../Components/Loader/Loader';
import { db } from '../fireBase/fireBase';

export function action(store) {
  return async ({ request }) => {
    const formData = await request.formData();
    const columns = JSON.parse(formData.get('columns')).map((col) => ({ id: col.id, name: col.name, tasks: [] }));
    const userId = `${store.getState().db.user}`;
    const { current } = store.getState().drawer;
    const defRoute = `users/${userId}/boards/${current.id}`;
    const curBoardRoute = `users/${userId}/current/board`;
    const curBoardRef = doc(db, curBoardRoute);
    // const updateCurBoard = columns.map((col) => updateDoc(curBoardRef, {
    //   'columns': arrayUnion(col),
    // }));
    const promisesDB = [...setColumnsDoc(columns, defRoute)];

    // const promisesDB = [updateCurBoard, ...setColumnsDoc(columns, defRoute)];
    await store.dispatch(addDataDB({ promisesDB, timeout: 2000 }));
    // if (columns.length < 1) return redirect('/');
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
