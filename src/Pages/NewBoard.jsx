import { redirect } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { doc, setDoc } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { setCurBoards } from '../features/drawer/drawerSlice';
import { ModalBG, ManageBoard } from '../Components/Modals/index';
import { db } from '../fireBase/fireBase';
import { addDataDB } from '../features/db/dbSlice';
import Loader from '../Components/Loader/Loader';
import { setColumnsDoc } from '../utils';

export function action(store) {
  return async ({ request }) => {
    const formData = await request.formData();
    const columns = JSON.parse(formData.get('columns')).map((col) => ({ name: col.name, id: col.id, tasks: [] }));

    const id = nanoid();
    const name = formData.get('boardName');
    const timeStamp = new Date();

    const userId = `${store.getState().db.user}`;
    const boardRoute = `users/${userId}/boards/${id}`;
    const curBoardRoute = `users/${userId}/current/board`;

    const boardsRef = doc(db, boardRoute);
    const curBoardRef = doc(db, curBoardRoute);

    const boardPromise = setDoc(boardsRef, { id, name, timeStamp });
    const curBoardPromise = setDoc(curBoardRef, { id, name });

    let promisesDB = [boardPromise, curBoardPromise];
    // make sure there at least 1 column
    if (columns.length) promisesDB = [...promisesDB, ...setColumnsDoc(columns, boardRoute)];
    await store.dispatch(addDataDB({ promisesDB, timeout: 2000 }));
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
