import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Header.css'

export default function Header() {
  return (
    <header className='header'>
      <div className='emptySpace'/>
      <div className='logo'>
        <Link to='/' className='logoLink'>
          <h4 className='logoText'>Aldiyar B.</h4>        
        </Link>
      </div>
      <div className='emptySpace'/>
    </header>
  )
}