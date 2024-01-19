/* eslint-disable max-len */
import {
  Box,
  Button,
  Stack,
  Tab, TabList, TabPanel, Tabs, Typography,
} from '@mui/joy';
import { Add } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Column from './Column/Column';
import ColumnName from './Column/ColumnName';

export default function MobileBoard({ columns }) {
  const navigate = useNavigate();
  return (
    <Box className="mobileBoard" sx={{ display: { xs: 'block', sm: 'none' } }}>
      <Tabs sx={{ backgroundColor: 'transparent' }}>
        <TabList
          sx={{
            overflow: 'auto',
            scrollSnapType: 'x mandatory',
            '&::-webkit-scrollbar': { display: 'none' },
          }}
        >
          <Button
            onClick={() => navigate('/add-column')}
            variant="solid"
            color="btnPrime"
            sx={{ borderRadius: '0', scrollSnapAlign: 'start' }}
          >
            <Add />
          </Button>
          {columns.map((column, i) => <Tab variant="solid" color="btnSecon" sx={{ flex: 'none', scrollSnapAlign: 'start' }} key={column.id}><ColumnName {...column} i={i} /></Tab>)}
        </TabList>
        {columns.map((column, i) => <TabPanel value={i} key={column.id}><Column {...column} i={i + 1} /></TabPanel>)}
      </Tabs>

    </Box>

  );
}
