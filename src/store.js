import { configureStore } from '@reduxjs/toolkit';
import drawerReducer from './features/drawer/drawerSlice';
import dbReducer from './features/db/dbSlice';

const store = configureStore({
  reducer: {
    drawer: drawerReducer,
    db: dbReducer,
  },
});

export default store;
