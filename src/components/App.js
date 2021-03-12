import React from 'react'
import { Switch, Route } from 'react-router'
import { HashRouter } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { getHistory } from '../index'

import '../styles/theme.scss'
import LayoutComponent from '../components/Layout'

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <ConnectedRouter history={getHistory()}>
          <HashRouter>
            <Switch>
              <Route
                path="/"
                dispatch={this.props.dispatch}
                component={LayoutComponent}
              />
            </Switch>
          </HashRouter>
        </ConnectedRouter>
      </div>
    )
  }
}

export default App
