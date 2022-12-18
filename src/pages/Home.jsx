import React, { useState, useMemo } from 'react'
import { getAllCountries } from '@/lib/fetch';
import CardList from '@/components/CardList/CardList';
import Form from '@components/Form/Form';
function Home() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);


  useMemo(async () => {
    try {
      setCountries(await getAllCountries());
    } catch (error) {
      setError(true);
    } finally{
      setLoading(false);
    }
  }, []);

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