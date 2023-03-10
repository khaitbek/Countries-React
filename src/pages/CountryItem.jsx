import React, { useMemo, useState, useEffect } from 'react'
import { useParams } from 'react-router';
import { getFetch, getSingleCountry } from '@/lib/fetch';
import { Link } from 'react-router-dom';
import {useTranslation} from "react-i18next";
import Country from '@components/Country/Country';
import uuid from 'react-uuid';
import Button from '@components/Button/Button';
import BorderList from '@components/BorderList/BorderList';
import "./pages.css";


function CountryItem() {
  const { name } = useParams();
  const [countryData, setCountryData] = useState([]);
  const {t} = useTranslation();
  useMemo(async () => {
    const singleCountry = await getSingleCountry(name);
    setCountryData([singleCountry[0]]);
  }, []);

  return (

    <>
      <section className="country">
        <div className="container">
          <Link className="page-link" to="/">Back</Link>
          {countryData.map(country => {
            const { capital, borders = [], currencies, flags, languages, region, subregion, population, tld } = country;
            const countryLanguages = Object.entries(languages)[0].join(", ");
            const borderCountries = borders.join(", ");
            const countryCurrency = currencies[Object.keys(currencies)[0]].name;
            const countryName = country.name.common;
            return <div className="country-wrapper" key={uuid()}>
              <img className="country-image" src={flags.svg} alt={`${countryName}'s flag`} tabIndex={0}/>
              <div className="country-inner">
                <h2 className="country-name" tabIndex={0}>{countryName} </h2>
                <div className="country-info">
                  <ul className="country-list country-list--main" tabIndex={0} title={`information about ${countryName}`}>
                    <Country key={uuid()} country={countryName} prop={t("native")} value={countryName} />
                    <Country key={uuid()} country={countryName} prop={t("population")} value={population} />
                    <Country key={uuid()} country={countryName} prop={t("region")} value={region} />
                    <Country key={uuid()} country={countryName} prop={t("subregion")} value={subregion} />
                    <Country key={uuid()} country={countryName} prop={t("capital")} value={capital} />
                  </ul>
                  <ul className="country-list country-list--main" tabIndex={0} title={`information about ${countryName}`}>
                    <Country key={uuid()} country={countryName} prop={t("domain")} value={tld} />
                    <Country key={uuid()} country={countryName} prop={t("currency")} value={countryCurrency} />
                    <Country key={uuid()} country={countryName} prop={t("lang")} value={countryLanguages} />
                  </ul>
                </div>
                {borders ? <BorderList borders={borders} /> : ""}
              </div>
            </div>
          })}
        </div>
      </section>
    </>
  )
}

export default CountryItem