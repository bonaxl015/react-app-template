import React from 'react'
import NavBar from '@/components/nav-bar'
import HomePage from './components/home-page'
import LibrariesUsed from './components/libraries-used'
import styles from './index.scss'

const Home: React.FC = () => (
  <>
    <section className={styles.homePageSection}>
      <NavBar />
      <HomePage />
    </section>
    <section className={styles.librariesSection}>
      <LibrariesUsed />
    </section>
  </>
)

export default Home
