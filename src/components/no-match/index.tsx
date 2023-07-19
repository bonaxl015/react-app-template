import React from 'react'
import { Button } from 'antd'
import { useHistory } from 'react-router-dom'
import styles from './index.scss'

const NoMatch = () => {
  const history = useHistory()

  const backToHome = () => history.push('/')

  return (
    <section className={styles.page404}>
      <div className={styles.textCenter}>
        <div className={styles.fourZeroFourBG}>
          <h1 className={styles.textCenter}>404</h1>
        </div>
        <div className={styles.contentBox404}>
          <h3>Looks like you're lost</h3>
          <p>The page you are looking cannot be found</p>
          <Button
            type="primary"
            style={{ backgroundColor: 'rgba(102, 48, 253, 1)' }}
            onClick={backToHome}
          >
            Go to Home
          </Button>
        </div>
      </div>
    </section>
  )
}

export default NoMatch
