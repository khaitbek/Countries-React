import React from 'react';
import {Link} from 'react-router-dom';
import "./card.css";

function Card({ img, name, population, region, capital }) {
    return (
        <li className="country-item" tabIndex={0}>
            <img src={img} tabIndex={0} alt={`${name}'s flag`} className="country-img" width="267" height="160" />
            <div className="country-inner">
                <h3 className="country-title" tabIndex={0}>{name}</h3>
                <ul className="country-info-list">
                    <li className="country-info-item" tabIndex={0} title={`${name}'s population is ${population}`}>
                        Population: <span className="country-special-info">
                            {population}
                        </span>
                    </li>
                    <li className="country-info-item" tabIndex={0} title={`${name}'s region is ${region}`}>
                        Region: <span className="country-special-info">
                            {region}
                        </span>
                    </li>
                    <li className="country-info-item" tabIndex={0} title={`${name}'s capital is ${capital}`}>
                        Capital: <span className="country-special-info">
                            {capital}
                        </span>
                    </li>
                    <li>
                        <Link className="country-link" title={`See more info about ${name}`} to={`country/${name}`}>
                            See all info
                        </Link>
                    </li>
                </ul>
            </div>
        </li>
    )
}

export default Card