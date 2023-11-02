import { useNavigate } from 'react-router-dom';

export default function AddNewTask() {
  const navigate = useNavigate();

  const boardNewModal = {
    title: 'Add New Board',
    label1: 'Board Name',
    label1PlaceHolder: 'e.g. Web Design',
    label3: 'Board Columns',
    btnSubTitle: 'Add New Column',
    btnMainTitle: 'Create New Board',
    inputValues: [{ id: 0, name: 'Todo' }, { id: 1, name: 'Doing' }],
  };

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
      <Modal modalData={boardNewModal} />
    </div>
  );
}
