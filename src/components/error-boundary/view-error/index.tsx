import React from 'react'
import './index.scss'

export interface ViewErrorProps {
  message?: string
}

const onReload = (e: React.MouseEvent) => {
  e.preventDefault()
  window.location.href = window.location.href.split('#')[0]
}

const ViewError: React.FC<ViewErrorProps> = ({ message }) => (
  <div className="error-custom-style-page">
    <div className="error-custom-style-mantle-page">
      <div className="error-boundary-page">
        {message}
        <span className="reload-page" onClick={onReload}>
          Reload
        </span>
      </div>
    </div>
  </div>
)

ViewError.defaultProps = {
  message: 'Failed to load, try again.'
}

export default ViewError
