import { Button, Stack, Typography } from '@mui/joy';
import { useNavigate } from 'react-router-dom';
import { Add } from '@mui/icons-material';

export default function NoContent({
  isOpen, title, route, btnTitle,
}) {
  const navigate = useNavigate();

  return (
    <main
      className="board"
      style={{
        left: isOpen ? 'var(--drawer-width)' : '0',
        placeContent: 'center',
      }}
    >
      <Stack spacing={3} alignItems="center">
        <Typography
          level="h4"
          sx={{
            fontWeight: '700',
            color: 'textSecon',
          }}
        >
          {title}
        </Typography>
        <Button
          onClick={() => navigate(route)}
          color="btnPrime"
          variant="solid"
          startDecorator={<Add />}
          sx={{
            borderTopRightRadius: '25px',
            borderBottomRightRadius: '25px',
            borderTopLeftRadius: '25px',
            borderBottomLeftRadius: '25px',
          }}
        >
          {btnTitle}
        </Button>
      </Stack>
    </main>
  );
}
