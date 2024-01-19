import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../fireBase/fireBase';
import AuthModal from '../Components/Modals/AuthModal';
import { setIsLoading } from '../features/db/dbSlice';

export default function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isError, setError] = useState({ local: null, server: null });

  const data = {
    title: 'Create profile.',
    btnName: 'Sign up',
    link: '/login',
    linkInfo: 'Login ',
    linkTitle: 'Already have account?',
  };

  async function handleSignUp(email, password) {
    dispatch(setIsLoading(true));
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      const errorCode = error.code;
      console.log(errorCode);
      setError({ ...isError, server: errorCode });
      dispatch(setIsLoading(false));
    }
  }

  return (
    <AuthModal handleAuth={handleSignUp} data={data} setError={setError} isError={isError} />
  );
}
