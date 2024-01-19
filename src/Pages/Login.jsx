import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../fireBase/fireBase';
import AuthModal from '../Components/Modals/AuthModal';
import { setIsLoading } from '../features/db/dbSlice';

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isError, setError] = useState({ local: null, server: null });

  const data = {
    title: 'Sign in to continue.',
    btnName: 'Login',
    link: '/sign-up',
    linkInfo: 'Sign up',
    linkTitle: 'Don\'t have an account?',
  };

  async function handleSignIn(email, password) {
    dispatch(setIsLoading(true));
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      const errorCode = error.code;
      console.log(errorCode);
      setError({ ...isError, server: errorCode });
      dispatch(setIsLoading(false));
    }
  }

  return (
    <AuthModal handleAuth={handleSignIn} data={data} setError={setError} isError={isError} />
  );
}
