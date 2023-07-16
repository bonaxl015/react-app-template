import React from 'react'
import NavBar from '@/components/nav-bar'
import HomePage from './components/home-page'
import './index.scss'

const Home = () => (
  <>
    <section className="home-page-section">
      <NavBar />
      <HomePage />
    </section>
  </>
)

export default Home
