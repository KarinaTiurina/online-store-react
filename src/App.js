import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import historyCb from 'helpers/historyCb';
import prepareData from 'helpers/prepareData';
import Navigation from 'components/views/Navigation';
import routes from 'routes';
import GalleryModal from 'components/views/GalleryModal';
import AppRouter from './AppRouter';

const RouteWithSubroutes = (route, key) => (
  <Route key={key} {...route} />
);

class App extends Component {
  constructor(props) {
    super(props);

    this.previousLocation = this.props.location;

    historyCb(this.props.store, window.location);
  }

  componentWillMount() {
    this.unlisten = this.props.history.listen((location, action) => {
      historyCb(this.props.store, location, action);
    });
  }

  componentWillUnmount() { 
    this.unlisten();
  }

  componentWillUpdate(nextProps) {
    const { location } = this.props;

    if (
      nextProps.history.action !== "POP" &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location;
    }
  }

  render() {
    const { location } = this.props;

    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    );

    return (      
      <Provider store={this.props.store}>
        <AppRouter location={this.props.location} context={this.props.context}>
          <Navigation />
          <Switch>
            {routes.map((route, i) => RouteWithSubroutes(route, i))}
          </Switch>
          {isModal ? <Route path="/images/:id" component={GalleryModal} /> : null}
        </AppRouter>      
      </Provider>
    );
  }
}

export default withRouter(App);
