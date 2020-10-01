import React from 'react';

const SearchBox = ({ searchfield, searchChange, makeVibe }) => {
  return (
    <div className='pa2'>

      <input
        aria-label="Search Field"
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search robots'
        onChange={(event) => {
          searchChange(event);
          makeVibe();
          }}
      />
    </div>
  );
}

export default SearchBox;