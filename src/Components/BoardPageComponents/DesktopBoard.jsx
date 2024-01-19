/* eslint-disable max-len */
import { Box } from '@mui/joy';
import AddNewColumn from './Column/AddNewColumn';
import ColumnName from './Column/ColumnName';
import Column from './Column/Column';

export default function DesktopBoard({ columns, isOpen }) {
  return (
    <Box
      className="desktopBoard"
      sx={{
        left: { xs: '0', sm: isOpen ? 'var(--drawer-width)' : '0' },
        display: { xs: 'none', sm: 'grid' },
        gridTemplateColumns: { xs: '1fr', sm: `repeat(${columns.length + 1}, minmax(250px,280px))` },
      }}
    >
      {columns.map((column, i) => <Column key={column.id} {...column} i={i + 1}><ColumnName {...column} i={i} /></Column>)}
      <AddNewColumn />
    </Box>
  );
}
