import { useNavigate, useSubmit } from 'react-router-dom';

export default function ModalBG({ children, myRef }) {
  const submit = useSubmit();
  const navigate = useNavigate();
  function handleClickOutside(e) {
    if (e.currentTarget === e.target) {
      submit(myRef.current, { method: 'post' });
      navigate('/');
    }
  }
  return (
    <div
      className="modalBG"
      onClick={handleClickOutside}
    >
      {children}
    </div>
  );
}
