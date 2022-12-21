import React, { useState, useMemo, useEffect, useCallback } from 'react'
import { getAllCountries } from '@/lib/fetch';
import CardList from '@/components/CardList/CardList';
import Form from '@components/Form/Form';
import { useTranslation } from 'react-i18next';
function Home() {
  const localCountries = JSON.parse(localStorage.getItem("countries"));
  const [countries, setCountries] = useState(localCountries || []);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  const {t, i18n} = useTranslation();

  useMemo(async () => {
    if(localCountries) return setLoading(false);
    try {
      const data = await getAllCountries();
      setCountries(data);
    } catch (error) {
      setError(true);
    } finally{
      setLoading(false);
    }
  }, []);

  useEffect(()=>{
    localStorage.setItem("countries",JSON.stringify(countries));
  },[countries]);

  return (
    <>

      <section className='countries'>
        <div className="container">
          <Form countries={countries} setCountries={setCountries} setError={setError} />
          {isLoading ? <h2 className='site-state'>{t("loading")}</h2> : ""}
          {isError ? <h2 className='site-state'>{t("error")}</h2> : ""}
          {countries ? <CardList countries={countries} /> : ""}
        </div>
      </section>

    </>
  )
}

export default Home