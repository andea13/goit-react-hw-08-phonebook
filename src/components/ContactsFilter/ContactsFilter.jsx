import { FilterLabel } from './ContactsFilter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/contacts/ContactsSlice';
import { selectFilter } from '../../redux/contacts/selectors';
import TextField from '@mui/material/TextField';

export const ContactsFilter = () => {
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const handleChange = value => {
    dispatch(setFilter(value));
  };

  return (
    <FilterLabel>
      Find contacts by name
      <TextField
        type="text"
        value={`${filter}`}
        onChange={({ target: { value } }) => handleChange(value)}
        variant="outlined"
      />
    </FilterLabel>
  );
};
