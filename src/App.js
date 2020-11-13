import React, { useState } from 'react';

import SearchForm from './components/SearchForm';

function App() {

  async function gifSearch(query, number) {
    try {
      const searchQuery = query;
      const gifsRequested = number;
      const url = `http://api.giphy.com/v1/gifs/search?q=${searchQuery}&api_key=JCi4z2AIWowzJTWX7HtbX7OjQIeZEHpT&limit=${gifsRequested}`

      const response = await fetch(url, { mode: 'cors' });
      const data = await response.json();
      console.log(data);
    } catch(error) {
      console.log(error);
    }
  }

  function userInput(searchTerm, numberRequested) {
    gifSearch(searchTerm, numberRequested);
  }

  return (
    <div className="App">
      <SearchForm userInput={userInput}/>
    </div>
  );
}

export default App;
