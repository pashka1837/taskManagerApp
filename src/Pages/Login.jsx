import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Sheet,
  Typography,
} from '@mui/joy';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { auth } from '../fireBase/fireBase';
import { setUser } from '../features/db/dbSlice';

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function handleSignIn(email, password) {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log('logged in');
      // dispatch(setUser(user.user.uid));

      navigate('/');
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const target = e.currentTarget;
    const data = {
      email: target.email.value,
      password: target.password.value,
    };
    if (!data.email || !data.password) {
      console.log('error');
      return;
    }
    handleSignIn(data.email, data.password);
  }
  return (
    <form onSubmit={handleSubmit}>
      <Sheet
        sx={{
          width: 300,
          mx: 'auto',
          my: 4,
          py: 3,
          px: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          borderRadius: 'sm',
          boxShadow: 'md',
        }}
        variant="outlined"
      >
        <div>
          <Typography level="h4" component="h1">
            <b>Welcome!</b>
          </Typography>
          <Typography level="body-sm">Sign in to continue.</Typography>
        </div>
        <FormControl>
          <FormLabel>Enter your login</FormLabel>
          <Input name="email" required type="email" />
        </FormControl>
        <FormControl>
          <FormLabel>Enter your password</FormLabel>
          <Input name="password" required type="password" />
        </FormControl>

        <Button type="submit" sx={{ mt: 1 }}>
          Log in
        </Button>
        <Typography
          endDecorator={<Link to="/sign-up">Sign up</Link>}
          fontSize="sm"
          sx={{ alignSelf: 'center' }}
        >
          Don't have an account?
        </Typography>
      </Sheet>
    </form>
  );
}
