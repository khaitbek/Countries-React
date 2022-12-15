import React from 'react';
import Card from '../Card/Card';
import "./cards.css";
import { countries } from '../../data/countries';
function CardList() {
  return (
    
    <ul className="card-list">
        {
            countries.map(country => {
              return <Card data={country} />
            })



        }
    </ul>
  )
}

export default CardList