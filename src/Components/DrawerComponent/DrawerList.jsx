import { List } from '@mui/joy';
import { useSelector } from 'react-redux';
import BoardItem from './BoardItem';
import NewBoardBtn from './NewBoardBtn';

export default function DrawerList() {
  const { boards, current } = useSelector((store) => store.drawer);
  return (
    <List size="lg">
      {boards.length
        ? boards.map((board) => (
          <BoardItem
            key={board.name}
            active={board.name === current.name}
            name={board.name}
          />
        ))
        : null}
      <NewBoardBtn />
    </List>
  );
}
