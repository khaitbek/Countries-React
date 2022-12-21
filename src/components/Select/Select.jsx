import React from 'react'
import { filterCountries } from '@lib/filter';
import "./select.css";
import { getFetch,BASE_API } from '@lib/fetch';
import {useTranslation} from "react-i18next";
const Select = React.forwardRef(({countries,setCountries},ref) => {
  const {t,i18n} = useTranslation();
  const selectHandler = async (evt) => {
    const currentRegion = ref.current.value;
    const routeToMakeRequest = currentRegion ? `region/${currentRegion}` : "all";
    const filteredCountries = await getFetch(BASE_API, routeToMakeRequest);
    setCountries(filteredCountries);

  }
  return (
    <select className='region-select' name="user_filter" id="regionFilter" onChange={selectHandler} ref={ref}>
      <option value="">{t("filter")}</option>
      <option value="africa">Africa</option>
      <option value="ame">America</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  )
})

export default Select