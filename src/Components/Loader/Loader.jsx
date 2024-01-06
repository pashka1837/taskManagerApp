import { CircularProgress } from '@mui/joy';

export default function Loader({ backgroundColor = 'transparent' }) {
  return (
    <div className="modalBG" style={{ backgroundColor: `${backgroundColor}` }}>
      <CircularProgress
        color="btnList"
        size="lg"
        value={30}
        variant="soft"
      />
    </div>

  );
}
