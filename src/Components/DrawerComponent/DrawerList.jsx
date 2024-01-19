import { List } from '@mui/joy';
import { useSelector } from 'react-redux';
import NewBoardBtn from './NewBoardBtn';
import BoardItem from './BoardItem';

export default function DrawerList() {
  const { current } = useSelector((store) => store.drawer);
  const { boards } = useSelector((store) => store.db);

  return (
    <List size="lg">
      {boards.length && current
        ? boards.map((board) => (
          <BoardItem
            key={board.id}
            active={board.id === current.id}
            name={board.name}
            id={board.id}
          />
        ))
        : null}
      <NewBoardBtn />
    </List>
  );
}
