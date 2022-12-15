import './styles/App.css';
import Header from '@components/Header/Header'
import Form from '@components/Form/Form';
import CardList from '@components/CardList/CardList';
import { useState, useEffect } from 'react';
import { getFetch, getAllCountries } from '@lib/fetch';

function App() {
  const [countries,setCountries] = useState([]);
  const [isLoading,setLoading] = useState(true);
  const [isError,setError] = useState(false);
  
  useEffect(()=>{
    const countryData = getAllCountries();
    countryData.then(allCountries => setCountries(allCountries));
    countryData.catch(err => setError(true));
    countryData.finally(()=> setLoading(false));
  },[])
  return (
    <>
      <div className="container">
        <Header />
      </div>
      <main className='site-main'>
        <section className='countries'>
          <div className="container">
            <Form countries={countries} setCountries={setCountries} setError={setError}/>
            {isLoading ? <h2>Loading</h2> : ""}
            {isError ? <h2>Error</h2> : ""}
            {countries ? <CardList countries={countries} /> : ""}
          </div>
        </section>
      </main>
    </>
  )
}

export default App
