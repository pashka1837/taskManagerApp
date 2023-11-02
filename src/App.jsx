import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import theme from './utils/them1';
import './App.css';
import HomeLayout from './Pages/HomeLayout';
import store from './store';

import AddNewBoard, { action as actionNewBoard } from './Pages/AddNewBoard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: 'add-board',
        element: <AddNewBoard />,
        action: actionNewBoard(store),
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
