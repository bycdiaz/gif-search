import React from 'react';

function SearchForm() {

  function logContents(event) {
    console.log(event.target.value);
  }
  return (
    <form action="">
      <label htmlFor="query">Search Term:</label>
      <input type="text" id="query" name="query" onChange={logContents}></input>

      <label htmlFor="query">Number Requested:</label>
      <input type="text" id="number" name="number" onChange={logContents}></input>
      <input type="submit" value="Submit"></input>

    </form> 
  )
}

export default SearchForm;
