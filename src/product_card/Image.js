import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import defaultImageUrl from '../../constants/defaultImageUrl'

class Image extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { src, width, height, alt } = this.props;

    return (
      <img src={src ? src : defaultImageUrl}
        alt={alt}
        width={width ? width : '50px'}
        height={height ? height : '50px'} />
    );
  }
}

export default Image;
