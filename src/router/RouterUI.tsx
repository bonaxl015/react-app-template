import * as React from 'react'
import BaseComponent from '@/components/base-component'
import {
  Route,
  Switch,
  withRouter,
  RouteComponentProps
} from 'react-router-dom'
import { RouterPage } from '@/types/RouterPage'
import NoMatch from '@/components/no-match'

interface RouterUIProps {
  routers: RouterPage[]
}

type Props = RouterUIProps & RouteComponentProps

class RouterUI extends BaseComponent<Props> {
  renderRouter = (routers: RouterPage[] = []) =>
    routers.map(router => {
      let { path, exact } = router
      return (
        <Route
          key={path}
          path={path}
          exact={exact ? true : false}
          render={() => this.renderPage(router)}
        />
      )
    })

  renderPage = (router: RouterPage) => {
    const { component, path, loadingFallback } = router
    const Page = component
    return (
      <React.Suspense fallback={loadingFallback || 'Loading...'} key={path}>
        <Page />
      </React.Suspense>
    )
  }

  render() {
    const { routers } = this.props
    return (
      <Switch>
        {this.renderRouter(routers)}
        <Route component={NoMatch} />
      </Switch>
    )
  }
}

export default withRouter(RouterUI)
