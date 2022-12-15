import React from 'react'
import { filterCountries } from '@lib/filter';
import "./select.css";
const Select = React.forwardRef(({countries,setCountries},ref) => {
  const selectHandler = evt => {
    const currentRegion = ref.current.value;
    const routeToMakeRequest = currentRegion ? `region/${currentRegion}` : "all";
    filterCountries(routeToMakeRequest).then(filteredCountries => {
      setCountries(filteredCountries);
    })
  }
  return (
    <select className='region-select' name="user_filter" id="regionFilter" onChange={selectHandler} ref={ref}>
      <option value="">Filter by Region</option>
      <option value="africa">Africa</option>
      <option value="ame">America</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  )
})

export default Select