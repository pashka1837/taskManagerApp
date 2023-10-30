import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useColorScheme } from '@mui/joy/styles';
import { Box, Switch } from '@mui/joy';

export default function ChangeThemeBtn() {
  const { mode, setMode } = useColorScheme();
  return (
    <Box sx={{
      justifySelf: 'center',
      width: '80%',
      display: 'grid',
      justifyItems: 'center',
      backgroundColor: 'background.body',
      gridTemplateColumns: 'repeat(3, 1fr)',
      paddingY: '0.7em',
      borderRadius: '5px',
    }}
    >
      <LightModeIcon sx={{ color: (mode === 'light') && 'btnPrime.500' }} />
      <Switch
        checked={mode === 'dark'}
        sx={{
          '--Switch-trackBorderColor': 'btnPrime.500',
          '--variant-borderWidth': '0px',
        }}
        color="btnPrime"
        variant="solid"
        onChange={() => setMode(mode === 'dark' ? 'light' : 'dark')}
      />
      <NightlightIcon sx={{ color: (mode === 'dark') && 'btnPrime.500' }} />
    </Box>
  );
}
