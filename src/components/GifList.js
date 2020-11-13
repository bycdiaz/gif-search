import React from 'react';

function GifList(props) {
  function Gifs() {
    return props.searchResults.map(result => {
      return (
        <ul className="gif-container" key={result.id}>
          <li>
            {result.title}
            <img src={result.images.preview_gif.url} alt="Loading" title="Loading" />
          </li>
        </ul>
      );
    });
  }

  return <Gifs />;
}

export default GifList;
