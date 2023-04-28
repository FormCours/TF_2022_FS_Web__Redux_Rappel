import { configureStore } from '@reduxjs/toolkit';
import presenceReducer from './reducers/presence.reducer';
import itemReducer from './reducers/item.slice';

// Best pratique pour la persistance du store :
// Utiliser une librairie qui fera les modifications optimisé =)

const store = configureStore({
  reducer: {
    presence: presenceReducer,
    item : itemReducer
  },
  devTools: import.meta.env.dev, 
  preloadedState: JSON.parse(localStorage.getItem('state') ?? '{}')
});

store.subscribe(() => {
  localStorage.setItem('state',  JSON.stringify(store.getState()));
})

export default store;