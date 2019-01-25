import React, { Component, Fragment } from 'react';
import { Route, withRouter } from 'react-router-dom';
import historyCb from 'helpers/historyCb';
import GalleryModal from 'components/views/GalleryModal';

const RouteWithSubroutes = (route, key) => (
  <Route key={key} {...route} />
);

class ModalConfig extends Component {
  constructor(props) {
    super(props);

    this.previousLocation = this.props.location;
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
      <Fragment>
        {isModal ? <Route path="/images/:id" component={GalleryModal} /> : null}
      </Fragment>
    );
  }
}

export default withRouter(ModalConfig);
