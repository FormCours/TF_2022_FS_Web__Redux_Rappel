import { createReducer } from '@reduxjs/toolkit';
import { presenceActionAddPerson, presenceActionInvalidate, presenceActionRemovePerson, presenceActionValidate } from '../actions/presence.action';

const initialState = {
  people: []
};

const presenceReducer = createReducer(initialState, builder => {
  builder
    .addCase(presenceActionAddPerson, (state, action) => {
      // Récuperation des données "payload" de l'action
      const person = action.payload;
      // Ajout de la personne dans la liste
      state.people.push(person);
    })
    .addCase(presenceActionRemovePerson, (state, action) => {
      const targetId = action.payload;
      state.people = state.people.filter(p => p.id !== targetId);
    })
    .addCase(presenceActionValidate, (state, action) => {
      const targetId = action.payload;

      const person = state.people.find(p => p.id === targetId);
      if (person) {
        person.isPresent = true;
      }
    })
    .addCase(presenceActionInvalidate, (state, action) => {
      const targetId = action.payload;

      const person = state.people.find(p => p.id === targetId);
      if (person) {
        person.isPresent = false;
      }
    });
});

export default presenceReducer;