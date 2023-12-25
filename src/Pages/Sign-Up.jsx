import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Sheet,
  Typography,
} from '@mui/joy';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../fireBase/fireBase';

export default function SignUp() {
  const navigate = useNavigate();
  async function handleSignUp(email, password) {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log('signd up');

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
    handleSignUp(data.email, data.password);
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
          <Typography level="body-sm">Create profile.</Typography>
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
          Sign Up
        </Button>
        <Typography
          endDecorator={<Link to="/login">Login</Link>}
          fontSize="sm"
          sx={{ alignSelf: 'center' }}
        >
          Already have account?
        </Typography>
      </Sheet>
    </form>
  );
}
