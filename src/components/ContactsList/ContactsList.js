import PropTypes from 'prop-types';
import s from './ContactsList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import contactsActions from '../../redux/actions';
import { getVisibleContacts } from '../../redux/selectors';

const ContactsList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const onRemove = id => dispatch(contactsActions.deleteContact(id));

  if (contacts.length === 0) return null;
  return (
    <div className={s.contacts}>
      <ul className={s.list}>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            <p>
              {name}: {number}
            </p>
            <button
              className={s.button}
              type="button"
              onClick={() => onRemove(id)}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactsList.protoTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default ContactsList;
