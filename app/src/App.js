import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

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
