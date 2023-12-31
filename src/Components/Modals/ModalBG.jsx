import { useNavigate, useSubmit } from 'react-router-dom';

export default function ModalBG({ children, formRef }) {
  const submit = useSubmit();
  const navigate = useNavigate();

  function handleClickOutside(e) {
    if (e.currentTarget === e.target) {
      if (formRef) {
        submit(formRef.current, { method: 'post' });
      }
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
