import React, { useState, useEffect } from 'react';
import unsplash from "../api/Unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";


const App = () => {
  const [images, setImages] = useState([]);

  const onSearchSubmit = async (inputText) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: inputText},
    });
    setImages(response.data.results);
  }

  useEffect(() => {
    	onSearchSubmit();
  }, [])

  return (
    <div className="ui container" style={{marinTop: "10px"}}>
      
      <SearchBar whenSubmitted={onSearchSubmit} />
      <ImageList foundImages={images}/>
    </div>
  );
}

export default App;
