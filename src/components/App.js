import React, { useState, useEffect } from 'react';
import axios from "axios";
import SearchBar from './SearchBar';


const App = () => {
  const [images, setImages] = useState([]);

  const onSearchSubmit = async (inputText) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: inputText},
      headers: {
        Authorization: "Client-ID LVdIXhfVQyl4XwYcKBZYwTsdLtDYVr4CyJ8LnqEXI5Y"
      }
    });
    console.log(response);
    setImages(response.data.results);
  }

  useEffect(() => {
    	onSearchSubmit();
  }, [])

  return (
    <div className="ui container" style={{marinTop: "10px"}}>
      
      <SearchBar whenSubmitted={onSearchSubmit} />
      {/* whenSubmitted is used because I can freely use a name, no restrictions */}
      <p>{images.length}</p>
    </div>
  );
}

export default App;
