import { useSelector } from 'react-redux';
import { Box } from '@mui/joy';
import { Column, NewColumn, NoContent } from '../Components/BoardPageComponents/index';

export default function Board() {
  const { isOpen, current } = useSelector((store) => store.drawer);

  if (!current) {
    const data = {
      title: 'No board yet. Create a new board to get started.',
      route: '/add-board',
      btnTitle: 'Add New Board',
    };
    return (<NoContent isOpen={isOpen} {...data} />);
  }
  const columns = current?.columns;

  if (!current.columns?.length) {
    const data = {
      title: 'This board is empty. Create a new column to get started.',
      route: '/add-column',
      btnTitle: 'Add New Column',
    };
    return (<NoContent isOpen={isOpen} {...data} />);
  }

  return (
    <Box
      className="board"
      sx={{
        left: { xs: '0', sm: isOpen ? 'var(--drawer-width)' : '0' },
        gridTemplateColumns: `repeat(${columns.length + 1}, minmax(250px,280px))`,
      }}
    >
      {columns.map((column) => <Column key={column.name} {...column} />)}
      <NewColumn />
    </Box>
  );
}
