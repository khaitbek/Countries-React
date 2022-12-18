import React, { useEffect, useState } from 'react';
import Card from '@components/Card/Card';
import uuid from 'react-uuid';
import "./cards.css";


function CardList({countries}) {
  return (

    <ul className="card-list">
      {countries.map(country => (
        <Card name={country.name.common} capital={country.capital || "No capital city"} img={country.flags.svg} population={country.population} region={country.region} key={uuid()}/>
      ))}
    </ul >
  )
}

export default CardList