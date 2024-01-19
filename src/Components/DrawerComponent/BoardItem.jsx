import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import { ListItem, ListItemButton } from '@mui/joy';
import { useDispatch, useSelector } from 'react-redux';
import { doc, setDoc } from 'firebase/firestore';
import { getCurrentBoardDB, toggleMenu } from '../../features/drawer/drawerSlice';
import { db } from '../../fireBase/fireBase';
import { addDataDB } from '../../features/db/dbSlice';

export default function BoardItem({ name, active, id }) {
  const userId = useSelector((store) => store.db.user);
  const current = useSelector((store) => store.drawer.current);

  const dispatch = useDispatch();

  async function handleClick() {
    if (current.id === id) return;
    const curBoardRoute = `users/${userId}/current/board`;
    const curBoardRef = doc(db, curBoardRoute);
    dispatch(addDataDB({ promisesDB: [setDoc(curBoardRef, { name, id })], timeout: 1000 }));
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
