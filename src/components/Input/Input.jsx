import React, { useState } from 'react'
import { debounce } from '@lib/debounce';
import { filterCountries } from '@lib/filter';
import { getFetch, getAllCountries } from '@lib/fetch';
import "./input.css";

const Input = React.forwardRef(({countries,setCountries,setError},ref) => {
    const inputHandler = debounce(evt => {
        const inputValue = ref.current.value;
        const routeToMakeRequest = inputValue.trim() ? `name/${inputValue}` : "all"
        filterCountries(routeToMakeRequest).then(data => setCountries(data));
        
    })
    return (
        <>
            <input className="search-input" id="searchInput" type="search" ref={ref} onChange={inputHandler}  placeholder='Search for a country' aria-label='Search for a country' required />
        </>
    )
}
)
export default Input