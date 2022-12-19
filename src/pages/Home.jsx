import React, { useState, useMemo, useEffect, useCallback } from 'react'
import { getAllCountries } from '@/lib/fetch';
import CardList from '@/components/CardList/CardList';
import Form from '@components/Form/Form';
function Home() {
  const localCountries = JSON.parse(localStorage.getItem("countries"));
  const [countries, setCountries] = useState(localCountries || []);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

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
          {isLoading ? <h2 className='site-state'>Loading</h2> : ""}
          {isError ? <h2 className='site-state'>Error</h2> : ""}
          {countries ? <CardList countries={countries} /> : ""}
        </div>
      </section>

    </>
  )
}

export default Home