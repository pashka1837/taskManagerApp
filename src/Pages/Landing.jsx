import { useSelector } from 'react-redux';
import {
  Box, Button, Sheet, useColorScheme,
} from '@mui/joy';
import Add from '@mui/icons-material/Add';
import Column from '../Components/Column/Column';

export default function Landing() {
  const { mode } = useColorScheme();
  const { isOpen, current } = useSelector((store) => store.drawer);
  const { columns } = current;

  return (
    <main className="board" style={{ left: isOpen ? 'var(--drawer-width)' : '0', gridTemplateColumns: `repeat(${columns.length + 1}, 280px)` }}>
      {
      (!columns.length)
        ? null
        : columns.map((column) => <Column key={column.name} {...column} />)
      }
      <div className="columnContainer">
        <h3
          className="columnTitle"
          style={{ color: 'transparent', userSelect: 'none' }}
        >
          x
        </h3>
        <div
          className="newColumn"
          style={{ backgroundColor: (mode === 'light') ? '#e4ebfa' : '#2B2C37' }}
        >
          <Button
            color="btnList"
            variant="plain"
            sx={{
              fontSize: '1.5em',
              fontWeight: '500',
              paddingY: '0.8em',
              letterSpacing: '3px',
              backgroundColor: 'transparent',
            }}
          >
            + New Column
          </Button>

        </div>
      </div>

    </main>
  );
}

{ /* <h2 style={{
            fontWeight: '500', color: '#828FA3', paddingLeft: '1em', letterSpacing: '3px',
          }}
          >
            {' '}
            + New Column
          </h2> */ }
