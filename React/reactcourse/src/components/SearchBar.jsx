import React from 'react';

function SearchBar({ filterText, inStockOnly, onFilterTextChange,onInStockOnlyChange }) {
  return (
    <form className="space-y-6">
      <div className="relative">
        <input 
          type="text" 
          value={filterText} 
          name='search'
          placeholder="Buscar"
          onChange={(e) => onFilterTextChange(e.target.value)}
          className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
        />
        <label class="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm" for="search">
          Buscar...
        </label>
        <div className="flex items-center justify-between mt-5 cent">
          <label className="flex items-center text-sm text-gray-200">
            <input 
              type="checkbox" 
              checked={inStockOnly}
              onChange={(e) => onInStockOnlyChange(e.target.checked)}
              className='form-checkbox h-4 w-4 text-purple-600 bg-gray-800 border-gray-300 rounded'
            />
            {' '}
            <span class="ml-2">Mostrar solo productos en stock</span>
          </label>
        </div>
      </div>
    </form>
  );
}

export default SearchBar;
