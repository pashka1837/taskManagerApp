import { Button, Typography, useColorScheme } from '@mui/joy';

export default function NewColumn() {
  const { mode } = useColorScheme();
  return (
    <div className="columnContainer">
      <Typography
        sx={{
          color: 'transparent',
          fontSize: 'xl',
          paddingBottom: '1.5em',
          letterSpacing: '3px',
          fontWeight: '600',
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
  );
}
