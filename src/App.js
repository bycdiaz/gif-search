import React from 'react';

import SearchForm from './components/SearchForm';

function App() {
  async function gifSearch() {
    try {
      const searchQuery = 'cats';
      const gifsRequested = 5;
      const url = `http://api.giphy.com/v1/gifs/search?q=${searchQuery}&api_key=JCi4z2AIWowzJTWX7HtbX7OjQIeZEHpT&limit=${gifsRequested}`

      const response = await fetch(url, { mode: 'cors' });
      const data = await response.json();
      console.log(data);
    } catch(error) {
      console.log(error);
    }
  }

  gifSearch();
  return (
    <div className="App">
      <SearchForm />
    </div>
  );
}

export default App;
