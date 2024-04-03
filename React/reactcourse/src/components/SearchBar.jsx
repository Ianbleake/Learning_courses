import React from 'react';

function SearchBar() {
  return (
    <form className="border border-solid border-blue-300 h-[100px] w-[198px]">
      <input type="text" placeholder="Buscar..." />
      <label>
        <input type="checkbox" />
        {' '}
        Mostrar solo productos en stock
      </label>
    </form>
  );
}

export default SearchBar;
