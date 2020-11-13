import './App.css';

function App() {
  async function gifSearch() {
    try {
      const url = 'http://api.giphy.com/v1/gifs/search?q=cats&api_key=JCi4z2AIWowzJTWX7HtbX7OjQIeZEHpT&limit=5'
      const response = await fetch(url, {mode: 'cors' });
      const data = await response.json();
      console.log(data);
    } catch(error) {
      console.log(error);
    }
  }

  gifSearch();
  return (
    <div className="App">
      hi
    </div>
  );
}

export default App;
