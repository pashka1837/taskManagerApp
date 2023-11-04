import { useNavigate } from 'react-router-dom';
import DeleteCompon from '../Components/DeleteCompon';

export default function Delete({ data }) {
  const navigate = useNavigate();
  function handleClickOutside(e) {
    if (e.currentTarget === e.target) navigate('/');
  }
  return (
    <div
      onClick={handleClickOutside}
      style={{
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        display: 'grid',
        placeItems: 'center',
        gridTemplateColumns: '1fr',
        backgroundColor: ' rgba(1, 1, 1, 0.6)',
        zIndex: '1600',
      }}
    >
      <DeleteCompon />
    </div>
  );
}
