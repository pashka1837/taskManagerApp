import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Sheet,
  Typography,
} from '@mui/joy';

import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useSelector } from 'react-redux';
import { ModalBG } from './index';
import { auth } from '../../fireBase/fireBase';
import Loader from '../Loader/Loader';

export default function AuthModal({
  handleAuth, data, setError, isError,
}) {
  const navigate = useNavigate();
  const { isLoading } = useSelector((store) => store.db);

  const {
    title, btnName, link, linkInfo, linkTitle,
  } = data;

  const status = {
    'auth/email-already-in-use': 'This email is already in use.',
    'auth/wrong-password': 'Wrong password or login.',
    'auth/user-not-found': 'Wrong password or login.',
    'auth/invalid-credential': 'Wrong credentials',
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setError({ local: null, server: null });
    const target = e.currentTarget;
    const inpData = {
      email: target.email.value.trim(),
      password: target.password.value.trim(),
    };
    if (!inpData.password.match(/^(\w+\S+)$/g)) { setError({ ...isError, local: 'Password can not contain spaces' }); return; }
    if (inpData.password.length < 7) { setError({ ...isError, local: 'Password should be at least 6 characters long' }); return; }
    await handleAuth(inpData.email, inpData.password);
  }

  useEffect(() => onAuthStateChanged(auth, (user) => {
    if (user) return navigate('/');
  }), []);

  return (
    <ModalBG>
      {isLoading && <Loader />}

      <form onSubmit={handleSubmit}>
        <Sheet
          sx={{
            width: {
              xs: 260, sm: 300, md: 350, lg: 400, xl: 450,
            },
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
            <Typography level="body-sm">{title}</Typography>
          </div>
          <FormControl>
            <FormLabel>Enter your email</FormLabel>
            <Input
              name="email"
              required
              type="email"
              color={isError.server ? 'danger' : 'inputPrime'}
              onFocus={() => setError({ local: null, server: null })}
            />
          </FormControl>
          <FormControl error={!!isError.local}>
            <FormLabel>Enter your password</FormLabel>
            <Input
              onFocus={() => setError({ local: null, server: null })}
              name="password"
              required
              type="password"
              color={isError.local || isError.server ? 'danger' : 'inputPrime'}
            />
            <FormHelperText color="btnPrime">{isError.local}</FormHelperText>
          </FormControl>

          <Button
            variant="solid"
            color="btnPrime"
            type="submit"
            disabled={!!isError.local}
            sx={{
              mt: 1,
              borderTopRightRadius: '25px',
              borderBottomRightRadius: '25px',
              borderTopLeftRadius: '25px',
              borderBottomLeftRadius: '25px',
            }}
          >
            {btnName}
          </Button>
          {isError.server && <Typography sx={{ textAlign: 'center' }} color="danger" level="body-sm">{status[`${isError.server}`]}</Typography> }

          <Typography
            endDecorator={<Link to={link}>{linkInfo}</Link>}
            fontSize="sm"
            sx={{ alignSelf: 'center' }}
          >
            {linkTitle}
          </Typography>
        </Sheet>
      </form>
    </ModalBG>
  );
}
