import React, {useContext} from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'

export const Navbar = () => {
  const navigate = useNavigate()
  const auth = useContext(AuthContext)
  const logoutHandler = event =>{
    event.preventDefault()
    auth.logout()
    navigate('/')
  }

  return (
    <nav>
      <div className="nav-wrapper indigo darken-2" style={{padding: '0 2rem'}}>
        <span className="brand-logo">Baby store</span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><NavLink to="/crate">Create</NavLink></li>
          <li><NavLink to="/basket">Basket</NavLink></li>
          <li><NavLink to="/" onClick={logoutHandler}>Выйти</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}