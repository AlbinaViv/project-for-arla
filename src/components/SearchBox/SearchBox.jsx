import css from './SearchBox.module.css';
import { IoIosSearch } from 'react-icons/io';
import milkData from '../Dashboard/data.json';
import { useState } from 'react';
export const SearchBox = () => {
  const [filterValue, setFilterValue] = useState('');

  const handleFilterChange = e => {
    setFilterValue(e.target.value.trim().toLowerCase());
  };

  const filteredData = milkData.filter(item =>
    item.Farm_ID.toString().toLowerCase().includes(filterValue)
  );

  return (
    <div className={css.wrap}>
      <IoIosSearch className={css.icon} />
      <label className={css.label}>Search</label>
      <input
        className={css.input}
        type="text"
        id="name"
        value={filterValue}
        onChange={handleFilterChange}
      />
      {/* <div>
        {filteredData.length === 0 ? (
          <p>No results found</p> // Если нет результатов
        ) : (
          <ul>
            {filteredData.map(item => (
              <li key={item.Farm_ID}></li> // Выводим Farm_ID
            ))}
          </ul>
        )}
      </div> */}
    </div>
  );
};
