import React from 'react'
import './home-page.scss'

const HomePage = () => (
  <div className="home-page-container">
    <div className="circle-1" />
    <div className="circle-2" />
    <div className="circle-3" />
    <div className="circle-4" />
    <div className="home-page-left">
      <div className="home-page-text-container">
        <p className="text-title">Welcome To React App Template</p>
        <p className="text-subtitle">
          See my own version of creating react template
        </p>
      </div>
    </div>
    <div className="home-page-right">
      <div className="logo-orbit-container">
        <img
          className="react-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt=""
        />
        <img
          className="sass-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg"
          alt=""
        />
        <img
          className="webpack-logo"
          src="https://raw.githubusercontent.com/webpack/media/master/logo/icon-square-big.png"
          alt=""
        />
        <img
          className="swc-logo"
          src="https://www.svgrepo.com/show/354419/swc.svg"
          alt=""
        />
        <img
          className="typescript-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
          alt=""
        />
      </div>
    </div>
  </div>
)

export default HomePage
