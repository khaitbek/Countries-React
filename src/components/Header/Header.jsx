import React from 'react'
import {useTranslation} from "react-i18next";
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import "./header.css";


function Header({theme,setTheme}) {
  const {t,i18n} = useTranslation();
  function themeToggler(){
    setTheme(previousTheme => (
      previousTheme === "light" ? "dark" : "light"
    ));
  }
  function handleLanguageSelect(evt) {
    if(evt.target.value === "") return
    i18n.changeLanguage(evt.target.value);
  }
  return (
    <header className={theme === "light" ? 'site-header' : 'site-header dark'}>
      <div className="container"> 
        <div className="header-wrapper">
          <Link className='site-logo' to="/">{t("logo")}</Link>
          <select onChange={handleLanguageSelect} name="page_language">
            <option value="">Change Language</option>
            <option value="uz">{t("uz")}</option>
            <option value="en">{t("en")}</option>
          </select>
          <Button className="theme-toggler" aria-label="change theme" onClick={() => {
            theme === "dark" ? setTheme("light") : setTheme("dark")
          }} text="Dark Mode" />
        </div>
      </div>
    </header>
  )
}

export default Header