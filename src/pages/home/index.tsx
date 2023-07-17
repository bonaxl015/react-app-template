import React from 'react'
import NavBar from '@/components/nav-bar'
import HomePage from './components/home-page'
import LibrariesUsed from './components/libraries-used'
import './index.scss'

const Home = () => (
  <>
    <section className="home-page-section">
      <NavBar />
      <HomePage />
    </section>
    <section className="libraries-section">
      <LibrariesUsed />
    </section>
  </>
)

export default Home
