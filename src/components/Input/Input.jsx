import React, { useState } from 'react'
import { debounce } from '@lib/debounce';
import { filterCountries } from '@lib/filter';
import { getFetch, getAllCountries } from '@lib/fetch';
import "./input.css";
import { BASE_API } from '@lib/fetch';
import { useTranslation } from 'react-i18next';

const Input = React.forwardRef(({ countries, setCountries, setError }, ref) => {
    const {t,i18next} = useTranslation();
    const inputHandler = debounce(async (evt) => {
        const inputValue = ref.current.value;
        const routeToMakeRequest = inputValue.trim() ? `name/${inputValue}` : "all"
        console.log(routeToMakeRequest);
        const filteredCountries = await getFetch(BASE_API, routeToMakeRequest);
        if(!Array.isArray(filteredCountries)) return (setCountries([]), setError(true));
        localStorage.setItem("inputValue",inputValue);
        setCountries(filteredCountries);
    })
    return (
        <>
            <input className="search-input" defaultValue={localStorage.getItem("inputValue")} aria-label="search for countries" id="searchInput" type="search" ref={ref} onChange={inputHandler} placeholder={t("search")} required />
        </>
    )
}
)
export default Input