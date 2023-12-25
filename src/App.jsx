import { polyfill } from 'mobile-drag-drop';
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import theme from './utils/theme';
import HomeLayout from './Pages/HomeLayout';
import store from './store';
import {
  NewBoard,
  actionNewBoard, NewTask, actionNewTask,
  EditBoard, actionEditBoard, Delete,
  SingleTask, actionChangeTaskStatus,
  EditTask, actionEditTask,
  NewColumn, actionNewColumn, Login, SignUp,
} from './Pages/index';

polyfill();

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: 'add-board',
        element: <NewBoard />,
        action: actionNewBoard(store),
      },
      {
        path: 'edit-board',
        element: <EditBoard />,
        action: actionEditBoard(store),
      },
      {
        path: 'delete',
        element: <Delete />,
      },
      {
        path: 'add-task',
        element: <NewTask />,
        action: actionNewTask(store),
      },
      {
        path: 'add-column',
        element: <NewColumn />,
        action: actionNewColumn(store),
      },
      {
        path: 'edit-task',
        element: <EditTask />,
        action: actionEditTask(store),
      },
      {
        path: 'task',
        element: <SingleTask />,
        action: actionChangeTaskStatus(store),
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/sign-up',
    element: <SignUp />,
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
