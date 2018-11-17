import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import bowser from 'bowser';
import App from '~/app'

const getBrowser = () => (
  bowser.getParser(window.navigator.userAgent)
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
