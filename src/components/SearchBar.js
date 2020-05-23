import React, { useState } from "react";

function SearchBar({whenSubmitted}){
    const [inputText, setInputText] = useState("");

    function onInputChange(event){
        const writtenText = event.target.value;
        setInputText(writtenText);
    }

    function onFormSubmit(event){
        event.preventDefault();         //to prevent the form to refresh the whole form

        whenSubmitted(inputText);
    }

    return (
        <div className="ui segment">
            <form onSubmit={onFormSubmit} className="ui form">
                <div className="field">
                    <label>Image Search</label>
                    <input
                        type="text"
                        value={inputText}
                        onChange={onInputChange}
                        placeholder="Search"
                    />
                </div>
            </form>
        </div>
    );
}

export default SearchBar;