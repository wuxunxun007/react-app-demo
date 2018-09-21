import React, {Component} from 'react';
import routes from '@/router/index';
import {Switch, Route, Redirect} from 'react-router-dom';
export default class App extends Component {
  render () {
    return (
      <div>
        <Switch >
          {
            routes.map((item, index) => {
              return (
                <Route key={index} path={item.path} component = {item.component} />
              )
            })
          }
          <Redirect to={{pathname:'/home'}} />
        </Switch>
      </div>
    )
  }
}
