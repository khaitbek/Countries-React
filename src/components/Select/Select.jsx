import React from 'react'
import "./select.css";
function Select() {
  return (
    <select className='region-select' name="user_filter" id="regionFilter">
      <option value="">Filter by Region</option>
      <option value="africa">Africa</option>
      <option value="america">America</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  )
}

export default Select