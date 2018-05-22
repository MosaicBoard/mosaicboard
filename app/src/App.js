import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// TODO: Blueprint CSS broken the UI,
// because the `*.scss` share the same CSS names.

// Blueprint is a React-based UI toolkit for the web
// import '@blueprintjs/core/lib/css/blueprint.css';
// import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import './styles/app.css';

import reducers from './reducers';
import { routes } from './routes';

function configureStore(initialState) {
  const enhancer = compose(applyMiddleware(thunk));

  return createStore(reducers, initialState, enhancer);
}

const store = configureStore({});

class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <Router>
          <Switch>
            {routes.map((route, index) => {
              return <Route key={index} path={route.path} component={route.component} exact={route.exact} />
            })}
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
