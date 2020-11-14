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
      // TODO return result so function call below isn't necessary
      setSearchResults(data.data);
    } catch(error) {
      console.log(error);
    }
  }

  function onUserInput(searchTerm, numberRequested) {
    gifSearch(searchTerm, numberRequested);
  }

  return (
    <div className="App">
      <h1>Gif Search</h1>
      <SearchForm onUserInput={onUserInput} />
      {/* TODO Bring in React Router. Clicking on result can take to Gif info page. */}
      {/* TODO Set up ability to up or downvote Gif in info page */}
      {/* TODO If Gif is rated in Gif info page, persist Gif details and rating in local storage. */}
      <GifList searchResults={searchResults} />
    </div>
  );
}

export default App;
