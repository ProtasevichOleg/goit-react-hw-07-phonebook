import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/phonebookSlice';
import PropTypes from 'prop-types';
import { Item, DeleteButton } from './ContactListItem.styled';

const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <Item>
      <p>
        {name}: {number}
      </p>
      <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
    </Item>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactListItem;
