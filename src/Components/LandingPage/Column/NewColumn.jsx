import { Add } from '@mui/icons-material';
import { Button, Typography, useColorScheme } from '@mui/joy';
import { useNavigate } from 'react-router-dom';

export default function NewColumn() {
  const { mode } = useColorScheme();
  const navigate = useNavigate();
  return (
    <div className="columnContainer">
      <Typography
        level="h5"
        sx={{
          color: 'transparent',
          paddingBottom: '1.5em',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          userSelect: 'none',
        }}
      >
        x
      </Typography>
      <div
        className="newColumn"
        style={{ backgroundColor: (mode === 'light') ? '#e4ebfa' : '#2B2C37' }}
      >
        <Button
          onClick={() => navigate('/edit-board')}
          color="btnList"
          variant="plain"
          startDecorator={<Add />}
          sx={{
            fontSize: '1.5em',
            fontWeight: '500',
            paddingY: '0.8em',
            backgroundColor: 'transparent',
            '&:hover': { backgroundColor: 'transparent' },
          }}
        >
          New Column
        </Button>

      </div>
    </div>
  );
}
