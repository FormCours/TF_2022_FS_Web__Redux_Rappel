import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';


const initialState = {
  items: []
};

const itemSlice = createSlice({
  initialState,
  name: 'item', // Prefixe pour les actions (cf : le domaine)
  reducers: {

    // Action préparé avec le reducer
    add: {
      // - Préparation de l'action (Génération d'id par exemple)
      prepare: ({ name, price }) => {
        // Envoi le payload préparé
        return {
          payload: {
            id: nanoid(),
            name,
            price,
            isValided: false
          }
        };
      },
      // - Résolution de l'action (cf : reducer)
      reducer: (state, action) => {
        const item = action.payload;
        state.items.push(item);
      }
    },

    // Action simple avec le reducer
    remove(state, action) {
      const targetId = action.payload;
      state.items = state.items.filter(item => item.id !== targetId);
    },
    validate(state, action) {
      const targetId = action.payload;

      const targetItem = state.items.find(item => item.id === targetId);
      if (targetItem) {
        targetItem.isValided = true;
      }
    }
  }
});


// Export des actions
export const {
  add: itemActionAdd,
  remove: itemActionRemove,
  validate: itemActionValidate
} = itemSlice.actions;

// Export du reducer
const itemReducer = itemSlice.reducer;
export default itemReducer;