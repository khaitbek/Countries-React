import { useState, lazy, useEffect, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import i18n from "i18next";
import { useTranslation } from 'react-i18next';
import { initReactI18next } from 'react-i18next';

const Header = lazy(() => import("@components/Header/Header"));
const Home = lazy(() => import("@pages/Home"));
const CountryItem = lazy(() => import("@pages/CountryItem"));
const NotFound = lazy(() => import("@pages/NotFound"));
import '@styles/App.css';
import { lang } from '../lang/lang';


function App() {
  i18n
    .use(initReactI18next)
    .init({
      debug: true,
      fallbackLng: 'uz',
      interpolation: {
        escapeValue: false,
      },
      resources: {
        en: {
          translation: lang.en
        },
        uz: {
          translation: lang.uz
        }
      }
    });
  const {t} = useTranslation();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  useEffect(() => localStorage.setItem("theme", theme), [theme])
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
