import { useSelector } from 'react-redux';
import Column from '../Components/LandingPage/Column/Column';
import NewColumn from '../Components/LandingPage/Column/NewColumn';
import NoContent from '../Components/LandingPage/NoContent';

export default function Landing() {
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
      route: '/edit-board',
      btnTitle: 'Add New Column',
    };
    return (<NoContent isOpen={isOpen} {...data} />);
  }

  return (
    <main
      className="board"
      style={{
        left: isOpen ? 'var(--drawer-width)' : '0',
        gridTemplateColumns: `repeat(${columns.length + 1}, 280px)`,
      }}
    >
      {columns.map((column) => <Column key={column.name} {...column} />)}
      <NewColumn />
    </main>
  );
}
