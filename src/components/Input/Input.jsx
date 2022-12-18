import React, { useState } from 'react'
import { debounce } from '@lib/debounce';
import { filterCountries } from '@lib/filter';
import { getFetch, getAllCountries } from '@lib/fetch';
import "./input.css";
import { BASE_API } from '@lib/fetch';

const Input = React.forwardRef(({ countries, setCountries, setError }, ref) => {
    const inputHandler = debounce(async (evt) => {
        const inputValue = ref.current.value;
        const routeToMakeRequest = inputValue.trim() ? `name/${inputValue}` : "all"
        const filteredCountries = await getFetch(BASE_API, routeToMakeRequest);
        if(!Array.isArray(filteredCountries)) return (setCountries([]), setError(true));
        setCountries(filteredCountries);
    })
    return (
        <>
            <input className="search-input" aria-label="search for countries" id="searchInput" type="search" ref={ref} onChange={inputHandler} placeholder='Search for a country' aria-label='Search for a country' required />
        </>
    )
}
)
export default Input