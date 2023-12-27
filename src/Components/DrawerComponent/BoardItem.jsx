import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import { ListItem, ListItemButton } from '@mui/joy';
import { useDispatch, useSelector } from 'react-redux';
import { doc, setDoc } from 'firebase/firestore';
import { setCurBoards, setCurrent, toggleMenu } from '../../features/drawer/drawerSlice';
import { getCurrendBoardDB } from '../../utils';
import { db } from '../../fireBase/fireBase';

// async function getCurrendBoardDB(useId, curBoard) {
//   const columnsRef = collection(db, `users/${useId}/boards/${curBoard}/columns`);
//   const currentBoard = { ...curBoard };
//   const columns = [];
//   const querySnapshot = await getDocs(columnsRef);
//   querySnapshot.forEach((docs) => {
//     columns.push(docs.data());
//   });
//   if (columns.length) currentBoard.columns = [...columns];
//   return currentBoard;
// }

export default function BoardItem({ name, active, id }) {
  const userId = useSelector((store) => store.db.user);
  const current = useSelector((store) => store.drawer.current);

  const dispatch = useDispatch();

  async function handleClick() {
    if (current.id === id) return;
    const curBoardRoute = `users/${userId}/current/board`;
    const curBoardRef = doc(db, curBoardRoute);
    const curBoard = await getCurrendBoardDB(userId, { name, id });
    await setDoc(curBoardRef, { name, id });
    dispatch(setCurBoards(curBoard));
    // dispatch(setCurrent(id));
    dispatch(toggleMenu(false));
  }
  return (
    <ListItem onClick={handleClick}>
      <ListItemButton
        color={active ? 'btnListSelected' : 'btnList'}
        variant="plain"
        selected={active}
        sx={{
          pl: '1em',
          fontSize: '1em',
          fontWeight: '500',
          paddingY: '0.8em',
          borderTopRightRadius: '25px',
          borderBottomRightRadius: '25px',
          caretColor: 'transparent',
        }}
      >
        <SpaceDashboardOutlinedIcon />
        {name}
      </ListItemButton>
    </ListItem>
  );
}
