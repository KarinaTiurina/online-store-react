import React, { Component } from 'react';
import browserContext from '~/browserContext';

const BuyButton = () => (
  <browserContext.Consumer>
    {
      (browser) => (
        browser.getPlatform().type == 'desktop' ? (
          <button>Desktop buy</button>
        ) : (
          <button>Mobile buy</button>
        )
      )
    }
  </browserContext.Consumer>
);

export default BuyButton;
