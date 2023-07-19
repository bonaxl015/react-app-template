import React from 'react'
import { useHistory } from 'react-router-dom'
import styles from './nav-bar.scss'

const NavBar = () => {
  const history = useHistory()

  const goToHome = () => history.push('/')

  const goToAbout = () => history.push('/about')

  const goToLogin = () => history.push('/login')

  return (
    <nav className={styles.navBar}>
      <div className={styles.navBarWrapper}>
        <div onClick={goToHome} className={styles.navBarLogo}>
          LOGO
        </div>
        <ul className={styles.navBarList}>
          <li className={styles.navBarItem} onClick={goToHome}>
            Home
          </li>
          <li className={styles.navBarItem} onClick={goToAbout}>
            About
          </li>
          <li className={styles.navBarItem} onClick={goToLogin}>
            Login
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
