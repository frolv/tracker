import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainPage from 'pages/main-page';
import NotFoundPage from 'pages/not-found';

import Topbar from 'partials/topbar';

import './app.scss';

export default class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <div className="tracker-container">
          <Topbar />
          <div className="tracker-page">
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
