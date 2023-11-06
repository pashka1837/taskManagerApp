import { useSelector } from 'react-redux';
import { Typography } from '@mui/joy';
import Column from '../Components/Column/Column';
import NewColumn from '../Components/Column/NewColumn';

export default function Landing() {
  const { isOpen, current } = useSelector((store) => store.drawer);
  const columns = current?.columns;
  if (!columns) {
    return (
      <main className="board" style={{ left: isOpen ? 'var(--drawer-width)' : '0' }}>
        <Typography color="textSecon">No boards yet</Typography>
      </main>
    );
  }

  return (
    <main className="board" style={{ left: isOpen ? 'var(--drawer-width)' : '0', gridTemplateColumns: `repeat(${columns.length + 1}, 280px)` }}>
      {
      (columns?.length)
        ? (
          <>
            {columns.map((column) => <Column key={column.name} {...column} />)}
            <NewColumn />
          </>
        )
        : <Typography color="textSecon">No columns yet</Typography>
      }
    </main>
  );
}
