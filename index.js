import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Image from '~/src/Image';
import TextBox from '~/src/TextBox';
import Price from '~/src/Price';
import defaultImageUrl from '~/constants/defaultImageUrl.js'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Image src={defaultImageUrl}
          alt='image test'
          width='50px'
          height='50' />
        <TextBox text='test' />
        <Price price='10.5' />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
