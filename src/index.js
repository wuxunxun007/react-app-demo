import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from '@/store/index';
import App from '@/components/App';
import Detail from '@/components/detail/index';
import ErrorBoundary from '@/components/ErrorBoundary';
import registerServiceWorker from './registerServiceWorker';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';

function render(){
  ReactDOM.render(
    <Provider store = {store}>
      <ErrorBoundary>
          <Router>
            <Switch>
              <Route path = '/detail' component = {Detail} />
              <Route path = '/' component = {App} />
            </Switch>
          </Router>
      </ErrorBoundary>
    </Provider>
    , document.getElementById('root'));
}

render();

store.subscribe(render);

registerServiceWorker();
