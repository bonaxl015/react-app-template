import React from 'react'
import { Button } from 'antd'
import { useHistory } from 'react-router-dom'
import './index.scss'

const NoMatch = () => {
  const history = useHistory()

  const backToHome = () => history.push('/')

  return (
    <div className="no-match-main">
      <div className="no-match-items">
        <div className="stop-img">
          <svg
            version="1.1"
            viewBox="-15.05 -15.05 30.1 30.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m-6.213203436-15-8.786796564 8.786796564v12.42640687l8.786796564 8.786796564h12.42640687l8.786796564-8.786796564v-12.42640687l-8.786796564-8.786796564z"
              fill="#fff"
              stroke="#000"
              stroke-width=".1"
            />
            <path
              d="m-14.25-5.902543264 8.347456736-8.347456736h11.80508653l8.347456736 8.347456736v11.80508653l-8.347456736 8.347456736h-11.80508653l-8.347456736-8.347456736z"
              fill="#f00"
            />
            <g transform="matrix(.0390625 0 0 .0390625 -12.5 -5)">
              <path d="m159 0v34h46v222h36v-222h46v-34" fill="#fff" />
              <path
                d="m122 60a46 46 0 0 0-92 0 46 46 0 0 0 22.18236714 39.35378463l28.98409425 17.46158061a86 86 0 0 1 40.83353861 73.18463476 52 52 0 0 1-104 0v-10m317.364971-130.2447377a47 47 0 0 1 91.27005806 0 300.625 300.625 0 0 1 10.36497097 78.24473769 300.625 300.625 0 0 1-10.36497097 78.24473769 47 47 0 0 1-91.27005806 0 300.625 300.625 0 0 1-10.36497097-78.24473769 300.625 300.625 0 0 1 10.36497097-78.24473769zm182.635029 206.2447377v-238h59.49484253a42 42 0 0 1 38.39691159 24.98009458 72 72 0 0 1 6.108245882 29.01990542 72 72 0 0 1-6.108245882 29.0220044 42 42 0 0 1-38.39691159 24.9779956h-59.49484253"
                fill="none"
                stroke="#fff"
                stroke-width="36"
              />
            </g>
          </svg>
        </div>
        <div>
          <p className="error-code">404</p>
          <p className="error-message">Oops! Page not found</p>
          <Button type="primary" onClick={backToHome}>
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  )
}

export default NoMatch
