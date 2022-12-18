import React from 'react'
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import "./header.css";
function Header({theme,setTheme}) {
  function themeToggler(){
    setTheme(previousTheme => (
      previousTheme === "light" ? "dark" : "light"
    ))
  }
  return (
    <header className={theme === "light" ? 'site-header' : 'site-header dark'}>
      <div className="container"> 
        <div className="header-wrapper">
          <Logo />
          <Button className="theme-toggler" aria-label="change theme" onClick={themeToggler} text="Dark Mode" />
        </div>
      </div>
    </header>
  )
}

export default Header