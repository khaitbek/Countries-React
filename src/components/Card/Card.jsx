import React from 'react';
import "./card.css";

function Card(data) {
    console.log(data);
    const {img,name,population,region, capital,id} = data.data;
    return (
        <li className="country-item" key={id}>
            <img src={img} alt="" className="country-img" width="267" height="160" />
            <div className="country-inner">
                <h3 className="country-title">{name}</h3>
                <ul className="country-info-list">
                    <li className="country-info-item">
                        Population: <span className="country-special-info">
                            {population}
                        </span>
                    </li>
                    <li className="country-info-item">
                        Region: <span className="country-special-info">
                            {region}
                        </span>
                    </li>
                    <li className="country-info-item">
                        Capital: <span className="country-special-info">
                            {capital}
                        </span>
                    </li>
                </ul>
            </div>
        </li>
    )
}

export default Card