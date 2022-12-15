export function getFetch(url,params = {}){
    const queryString = Object.entries(params).map(param => (
        `${param[0]}=${param[1]}`
    )).join("&");
    return fetch(`${url}?${params}`).then(res => res.json());
}

export function getAllCountries(){
    const countries = getFetch("https://restcountries.com/v3.1/all");
    return countries;
}