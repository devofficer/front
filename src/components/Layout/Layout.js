import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, withRouter } from 'react-router'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Hammer from 'rc-hammerjs'

import BlankPage from '../../pages/blank/Blank'

import s from './Layout.module.scss'

class Layout extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.wrap}>
          <Hammer>
            <main className={s.content}>
              <TransitionGroup>
                <CSSTransition
                  key={this.props.location.key}
                  classNames="fade"
                  timeout={200}
                >
                  <Switch>
                    <Route path="/" exact component={BlankPage} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </main>
          </Hammer>
        </div>
      </div>
    )
  }
}

export default withRouter(Layout)
