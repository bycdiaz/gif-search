import React, { useState } from 'react';

// TODO Disable inputs until successful response.
// TODO Show pending action.
// TODO Debounce user input

function SearchForm({ onUserInput }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [numberOfGifs, setNumberOfGifs] = useState(0);

  function setUserInput(event) {
    // TODO lowercase and trim
    if (event.target.name === 'query') setSearchTerm(event.target.value);

    // TODO accept numbers only and trim
    if (event.target.name === 'number') setNumberOfGifs(event.target.value);
  }

  function gatherInput(event) {
    event.preventDefault();
    onUserInput(searchTerm, numberOfGifs);
  }

  return (
    <form action="" onSubmit={gatherInput}>

      <label htmlFor="query">Search Term:</label>
      <input type="text" id="query" name="query" onChange={setUserInput}></input>

      <label htmlFor="query">Number Requested:</label>
      <input type="text" id="number" name="number" onChange={setUserInput}></input>

      <input type="submit" value="Submit"></input>

    </form> 
  )
}

export default SearchForm;
