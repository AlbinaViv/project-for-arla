import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filtersContactAction } from '../../redux/filters/filters.slice';
import { selectFilter } from '../../redux/selectors';
import { IoIosSearch } from 'react-icons/io';

export const SearchBox = () => {
  const dispatch = useDispatch();

  const handleFilterChange = e =>
    dispatch(filtersContactAction(e.target.value.trim().toLowerCase()));

  const value = useSelector(selectFilter);

  return (
    <div className={css.wrap}>
      <IoIosSearch className={css.icon} />
      <label className={css.label}>Search</label>
      <input
        className={css.input}
        type="text"
        id="name"
        value={value}
        onChange={handleFilterChange}
      />
    </div>
  );
};
