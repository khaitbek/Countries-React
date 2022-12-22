import { useState, lazy, useEffect, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';


const Header = lazy(() => import("@components/Header/Header"));
const Home = lazy(() => import("@pages/Home"));
const CountryItem = lazy(() => import("@pages/CountryItem"));
const NotFound = lazy(() => import("@pages/NotFound"));
import '@styles/App.css';
import "../i18n"
import { useTranslation } from 'react-i18next';



function App() {
  const { t } = useTranslation()

  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    localStorage.setItem("theme", theme)
  }, [theme])
  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      <main className={theme === "dark" ? "site-main dark" : "site-main"}>
        <Suspense fallback={<h1>{t("loading")}</h1>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/country/:name" element={<CountryItem />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
    </>
  )
}

export default App
