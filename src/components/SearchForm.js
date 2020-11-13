import React, { useState } from 'react';

function SearchForm(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [numberOfGifs, setNumberOfGifs] = useState(0);

  function SetUserInput(event) {
    if (event.target.name === 'query') setSearchTerm(event.target.value);

    if (event.target.name === 'number') setNumberOfGifs(event.target.value);
  }

  function gatherInput(event) {
    event.preventDefault();
    props.userInput(searchTerm, numberOfGifs);
  }

  return (
    <form action="" onSubmit={gatherInput}>

      <label htmlFor="query">Search Term:</label>
      <input type="text" id="query" name="query" onChange={SetUserInput}></input>

      <label htmlFor="query">Number Requested:</label>
      <input type="text" id="number" name="number" onChange={SetUserInput}></input>

      <input type="submit" value="Submit"></input>

    </form> 
  )
}

export default SearchForm;
