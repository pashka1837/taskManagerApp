import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import theme from './utils/them1';
import './App.css';
import HomeLayout from './Pages/HomeLayout';
import Landing from './Pages/Landing';
import store from './store';
import { Provider } from 'react-redux';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
    ],
  },
]);
function App() {
  return (
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>

    </CssVarsProvider>
  );
}

export default App;
