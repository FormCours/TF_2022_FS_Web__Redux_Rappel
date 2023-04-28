import { configureStore } from '@reduxjs/toolkit';
import presenceReducer from './reducers/presence.reducer';


const store = configureStore({
  reducer: {
    presence: presenceReducer
  },
  devTools: import.meta.env.dev
});

export default store;