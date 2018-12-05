import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Navigation from '~/src/components/views/Navigation';
import routes from '~/src/routes';
import GalleryModal from '~src/components/views/GalleryModal';

const RouteWithSubroutes = (route, key) => (
  <Route key={key} {...route} />
);

class App extends Component {
  constructor(props) {
    super(props);

    this.previousLocation = this.props.location;
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
      <div>
        <Navigation />
        <Switch>
          {routes.map((route, i) => RouteWithSubroutes(route, i))}
        </Switch>
        {isModal ? <Route path="/images/:id" component={GalleryModal} /> : null}
      </div>
    );
  }
}

export default withRouter(App);
