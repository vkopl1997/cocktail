import React from 'react';
import './header.css'
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className='navbar'>
        <span>Find Your Favorite Cocktail</span>
        <div className='nav-wrapper'>
          <Link to='/'>
          <button className='buttonnav'><span>home</span><i></i></button>
          </Link>
          <Link to='/about'>
          <button className='buttonnav'><span>about</span><i></i></button>
          </Link> 
        </div>
    </div>
  )
}
