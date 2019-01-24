import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import historyCb from 'helpers/historyCb';
import prepareData from 'helpers/prepareData';
import Navigation from 'components/views/Navigation';
import routes from 'routes';
import GalleryModal from 'components/views/GalleryModal';
import AppRouter from './AppRouter';
import ModalConfig from './ModalConfig';

const RouteWithSubroutes = (route, key) => (
  <Route key={key} {...route} />
);

class App extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <AppRouter location={this.props.location} context={this.props.context}>
          <div>
            <Navigation />
            <Switch>
              {routes.map((route, i) => RouteWithSubroutes(route, i))}
            </Switch>
            <ModalConfig store={this.props.store} />
          </div>
        </AppRouter>
      </Provider>
    );
  }
}

export default App;
