import React from 'react';
import SearchBar from './SearchBar';

function App(){

function onSearchSubmit(inputText){
  console.log(inputText);
}

  return (
    <div className="ui container" style={{marinTop: "10px"}}>
      
      <SearchBar whenSubmitted={onSearchSubmit} />
      {/* whenSubmitted is used because I can freely use a name, no restrictions */}
    </div>
  );
}

export default App;
