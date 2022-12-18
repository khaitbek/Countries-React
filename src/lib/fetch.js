export const BASE_API = "https://restcountries.com/v3.1/"

export async function getFetch(url,params = "all"){
    return await fetch(`${url}${params}`).then(res => res.json());
}

export async  function getAllCountries(){
    const countries = getFetch(BASE_API);
    return countries;
}

export async function getSingleCountry(country) {
    const singleCountryData = getFetch(BASE_API,`name/${country}`);
    return await singleCountryData;
}