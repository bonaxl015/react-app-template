import React from 'react'
import './index.scss'

export interface GlobalErrorProps {
  message?: string
}

const onReload = (e: React.MouseEvent) => {
  e.preventDefault()
  window.location.href = window.location.href.split('#')[0]
}

const GlobalError: React.FC<GlobalErrorProps> = ({ message }) => (
  <div className="error-custom-style">
    <div className="error-boundary">
      {message}
      <span className="reload" onClick={onReload}>
        Reload
      </span>
    </div>
  </div>
)

GlobalError.defaultProps = {
  message: 'Page Crashed!'
}

export default GlobalError
