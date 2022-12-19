import React from 'react';
import uuid from 'react-uuid';

function Country({country, prop, value, ...rest}) {
    return (
        <li className="country-single-item" key={uuid()} tabIndex={0}  title={`${country}'s top domain is ${value}`} {...rest}>
            {prop}:
            <span className="country-span">
                {value}
            </span>
        </li>
    )
}

export default Country