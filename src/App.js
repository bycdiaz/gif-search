import React, { useState } from 'react';

import SearchForm from './components/SearchForm';
import GifList from './components/GifList';

function App() {
  const [searchResults, setSearchResults] = useState([]);

  async function gifSearch(query, number) {
    try {
      const searchQuery = query;
      const gifsRequested = number;
      const url = `http://api.giphy.com/v1/gifs/search?q=${searchQuery}&api_key=JCi4z2AIWowzJTWX7HtbX7OjQIeZEHpT&limit=${gifsRequested}`

      const response = await fetch(url, { mode: 'cors' });
      const data = await response.json();
      setSearchResults(data.data);
    } catch(error) {
      console.log(error);
    }
  }

  function userInput(searchTerm, numberRequested) {
    gifSearch(searchTerm, numberRequested);
  }

  return (
    <div className="App">
      <h1>Gif Search</h1>
      <SearchForm userInput={userInput} />
      {/* Bring in React Router. Clicking on result can take to Gif info page. */}
      <GifList searchResults={searchResults} />
    </div>
  );
}

export default App;
