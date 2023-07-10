import React from 'react'
import { Button } from 'antd'
import { useHistory } from 'react-router-dom'
import './index.scss'

const NoMatch = () => {
  const history = useHistory()

  const backToHome = () => history.push('/')

  return (
    <section className="page_404">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="col-sm-10 col-sm-offset-1 text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center">404</h1>
              </div>
              <div className="contant_box_404">
                <h3 className="h2">Looks like you're lost</h3>
                <p>The page you are looking cannot be found</p>
                <Button type="primary" onClick={backToHome}>
                  Go to Home
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NoMatch
