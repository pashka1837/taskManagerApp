import { CircularProgress } from '@mui/joy';
import { ModalBG } from '../Modals';

export default function Loader() {
  return (
    <div className="modalBG" style={{ backgroundColor: 'transparent' }}>
      <CircularProgress
        color="btnList"
        size="lg"
        value={30}
        variant="soft"
      />
    </div>

  );
}
