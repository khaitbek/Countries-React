import { getFetch } from '@lib/fetch';
export function filterCountries(route){
    const filteredData = getFetch(`https://restcountries.com/v3.1/${route}`);
    const result =  filteredData.then(filteredCountries => {
        if(filteredCountries.status === 404) return [];
        return filteredCountries;
    })
    return result
}