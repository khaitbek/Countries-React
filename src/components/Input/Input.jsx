import React, { useState } from 'react'
import "./input.css";

function Input() {
    const [inputText, setInputText] = useState("");
    const inputTextHandler = e => {
        // abc
        setInputText(e.target.value);
    }
    return (
        <>
            <input type="search" className="search-input" id="searchInput" placeholder='Search for a country' aria-label='Search for a country' onChange={e => console.log(e)} required />
            <h2 className="input-text">{inputText}</h2>
        </>
    )
}

export default Input