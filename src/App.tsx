import React from 'react'
import routerConfig from './router'
import RouterUI from '@/router/RouterUI'
import AppContext from './common/AppContext'
import { IAppContext } from '@/types/IContext'

document.title = 'React Template'

class App extends React.Component {
  private a = 2

  private getLiveContextValue = (): IAppContext => ({
    token: '123',
    uid: 1233,
    test: this.test
  })

  private test = () => {
    console.log('aa=2=', this.a)
  }

  public render() {
    return (
      <>
        <AppContext.Provider value={this.getLiveContextValue()}>
          <RouterUI routers={routerConfig.routes} />
        </AppContext.Provider>
      </>
    )
  }
}

export default App
