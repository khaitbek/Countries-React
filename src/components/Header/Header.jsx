import React from 'react'
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import "./header.css";
function Header() {
  return (
    <header className='site-header'>
        <div className="header-wrapper">
            <Logo />
            <Button />
        </div>
    </header>
  )
}

export default Header