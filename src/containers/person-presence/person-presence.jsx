import { useDispatch, useSelector } from 'react-redux';
import { presenceActionAddPerson } from '../../store/actions/presence.action';

const PersonPresenceRead = () => {
  // Lecture du store
  const people = useSelector(state => state.presence.people);

  return (
    <ul>
      {people.map(person => (
        <li key={person.id}>
          {person.firstname} {person.lastname} {person.isPresent ? 'V' : 'X'}
        </li>
      ))}
    </ul>
  );
};

const PersonPresenceEvent = () => {
  // Permettre d'envoyer des actions
  const dispatch = useDispatch();

  const handleAddZaza = () => {
    const zaza = { firstname: 'Zaza', lastname: 'Vanderquack' };
    dispatch(presenceActionAddPerson(zaza));
  };
  const handleAddDella = () => {
    dispatch(presenceActionAddPerson({firstname: 'Della', lastname: 'Duck'}));
  };

  return (
    <>
      {/* FIXME : Replace with a form */}
      <button onClick={handleAddZaza}>Ajouter Zaza</button>
      <button onClick={handleAddDella}>Ajouter Della</button>
    </>
  );
};


const PersonPresence = () => {
  return (
    <>
      <PersonPresenceRead />
      <PersonPresenceEvent />
    </>
  );
};

export default PersonPresence;