import '@styles/App.css';
import Header from '@components/Header/Header'
import Form from '@components/Form/Form';
import CardList from '@components/CardList/CardList';
import Home from '@pages/Home';
import CountryItem from '@pages/CountryItem';
import NotFound from '@pages/NotFound';
import { useState, useEffect, useMemo } from 'react';
import { getFetch, getAllCountries } from '@lib/fetch';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      <main className={theme === "dark" ? "site-main dark" : "site-main"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:name" element={<CountryItem />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  )
}

export default App
