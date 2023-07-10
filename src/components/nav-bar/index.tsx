import React from 'react'
import { useHistory } from 'react-router-dom'
import './nav-bar.scss'

const NavBar = () => {
  const history = useHistory()

  const goToHome = () => history.push('/')

  const goToAbout = () => history.push('/about')

  const goToLogin = () => history.push('/login')

  return (
    <nav className="nav-bar">
      <div className="nav-bar__wrapper">
        <div onClick={goToHome} className="nav-bar__logo">
          LOGO
        </div>
        <ul className="nav-bar__list">
          <li className="nav-bar__item" onClick={goToHome}>
            Home
          </li>
          <li className="nav-bar__item" onClick={goToAbout}>
            About
          </li>
          <li className="nav-bar__item" onClick={goToLogin}>
            Login
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
