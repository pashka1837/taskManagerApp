import { useSelector } from 'react-redux';
import Column from '../Components/Column/Column';
import NewColumn from '../Components/Column/NewColumn';

export default function Landing() {
  const { isOpen, current } = useSelector((store) => store.drawer);
  const { columns } = current;
  const sortColumns = [...columns];
  sortColumns.sort((a, b) => b.name.localeCompare(a.name));
  return (
    <main className="board" style={{ left: isOpen ? 'var(--drawer-width)' : '0', gridTemplateColumns: `repeat(${columns.length + 1}, 280px)` }}>
      {
      (!sortColumns.length)
        ? null
        : sortColumns.map((column) => <Column key={column.name} {...column} />)
      }
      <NewColumn />
    </main>
  );
}
