import { useSelector } from 'react-redux';
import Column from '../Components/Column/Column';

export default function Landing() {
  const { isOpen, current } = useSelector((store) => store.drawer);
  const { columns } = current;
  console.log(columns);

  return (
    <main className="board" style={{ left: isOpen ? 'var(--drawer-width)' : '0', gridTemplateColumns: `repeat(${columns.length + 1}, 280px)` }}>
      {
      (!columns.length)
        ? null
        : columns.map((column) => <Column key={column.name} {...column} />)
      }
      <div className="newColumn">
        <h2 style={{
          fontWeight: '700', color: '#828FA3', paddingLeft: '1em', letterSpacing: '3px',
        }}
        >
          + New Column
        </h2>
      </div>
    </main>
  );
}
