import { configureStore } from '@reduxjs/toolkit';
import presenceReducer from './reducers/presence.reducer';
import itemReducer from './reducers/item.slice';


const store = configureStore({
  reducer: {
    presence: presenceReducer,
    item : itemReducer
  },
  devTools: import.meta.env.dev
});

export default store;