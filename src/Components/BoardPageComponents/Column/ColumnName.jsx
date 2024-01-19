import { Stack, Typography } from '@mui/joy';

export default function ColumnName({ name, tasks, i }) {
  const x = i > 10 ? -0.1 * i : i;
  const r = i > 10 ? 355 : 70;
  const b = i > 10 ? 355 : 200;
  const a = i > 10 ? 0 : 200;
  const bgColor = `rgba(${r + x * 45},${b + x * 10},${a - x * 45}, 1)`;
  return (
    <Stack direction="row" alignItems="center" spacing={2} sx={{ paddingBottom: { xs: '1em', sm: '1.5em' }, paddingTop: { xs: '1em', sm: '0' } }}>
      <span style={{
        width: '12px',
        height: '12px',
        borderRadius: '100%',
        backgroundColor: `${bgColor}`,
      }}
      />
      <Typography
        level="h5"
        sx={{
          color: 'textSecon',
          letterSpacing: '3px',
          fontWeight: '600',
          textTransform: 'uppercase',
          caretColor: 'transparent',
        }}
      >
        {name}
        {' '}
        (
        {tasks?.length || '0'}
        )
      </Typography>
    </Stack>
  );
}
