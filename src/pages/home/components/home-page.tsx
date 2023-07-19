import React from 'react'
import styles from './home-page.scss'

const HomePage = () => (
  <div className={styles.homePageContainer}>
    <div className={styles.circle1} />
    <div className={styles.circle2} />
    <div className={styles.circle3} />
    <div className={styles.circle4} />
    <div className={styles.homePageLeft}>
      <div className={styles.homePageTextContainer}>
        <p className={styles.textTitle}>Welcome To React App Template</p>
        <p className={styles.textSubtitle}>
          See my own version of creating react template
        </p>
      </div>
    </div>
    <div className={styles.homePageRight}>
      <div className={styles.logoOrbitContainer}>
        <img
          className={styles.reactLogo}
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt=""
        />
        <img
          className={styles.sassLogo}
          src="https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg"
          alt=""
        />
        <img
          className={styles.webpackLogo}
          src="https://raw.githubusercontent.com/webpack/media/master/logo/icon-square-big.png"
          alt=""
        />
        <img
          className={styles.swcLogo}
          src="https://www.svgrepo.com/show/354419/swc.svg"
          alt=""
        />
        <img
          className={styles.typescriptLogo}
          src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
          alt=""
        />
      </div>
    </div>
  </div>
)

export default HomePage
