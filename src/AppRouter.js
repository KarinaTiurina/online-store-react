/* globals __CLIENT__, __SERVER__ */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, StaticRouter } from 'react-router-dom';

class AppRouter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (__CLIENT__)
      return (
        <Router>{this.props.children}</Router>
      );

    if (__SERVER__)
      return (
        <StaticRouter location={this.props.location} context={this.props.context}>{this.props.children}</StaticRouter>
      );
  }
}

export default AppRouter;
