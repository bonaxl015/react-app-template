import React from 'react'
import ReactDOM from 'react-dom'
import App from '@/App'
import { Provider } from 'react-redux'
import history from '@/store/reducers/history'
import configureStore from '@/store'
import { ConnectedRouter } from 'connected-react-router'
import './index.scss'
import ErrorBoundary from '@/components/error-boundary'

try {
  const store = configureStore({})
  const rootElement = document.getElementById('app')

  const renderApp = () => {
    ReactDOM.render(
      <ErrorBoundary>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <App />
          </ConnectedRouter>
        </Provider>
      </ErrorBoundary>,
      rootElement
    )
  }
  renderApp()
} catch (error) {
  console.log(error)
}
