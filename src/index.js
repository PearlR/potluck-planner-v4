import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'

import App from './components/App'
import Homepage from './components/Homepage/Homepage'
import Login from './components/Login/Login'
import LoginSucess from './components/Login-Success/LoginSuccess'
import { reducer } from './state/reducer'

import './index.css'

const store = createStore(
  reducer,
  window.devToolsExtension && window.devToolsExtension()
)

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="/home" component={Homepage} />
      <Route path="/login" component={Login} />
      <Route path="/success" component={LoginSucess} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
