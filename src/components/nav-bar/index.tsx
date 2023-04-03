import React from 'react'
import { useHistory } from 'react-router-dom'

const NavBar = () => {
  const history = useHistory()

  const goToHome = () => history.push('/')

  const goToAbout = () => history.push('/about')

  const goToLogin = () => history.push('/login')

  return (
    <div>
      <div>
        <div onClick={goToHome}>logo</div>
        <ul>
          <li onClick={goToHome}>Home</li>
          <li onClick={goToAbout}>About</li>
          <li onClick={goToLogin}>Login</li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
