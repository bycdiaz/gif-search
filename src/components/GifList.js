import React from 'react';

function GifList(props) {
  function Gifs() {
    return props.searchResults.map(result => {
      return (
        <div className="gif-container" key={result.id}>
          <p>
            {result.title}
          </p>
        </div>
      );
    });
  }

  return <Gifs />;
}

export default GifList;
