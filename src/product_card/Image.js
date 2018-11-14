import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import defaultImageUrl from '../../constants/defaultImageUrl'

class Image extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { image, alt } = this.props;

    return (
      <img src={image.src ? image.src : defaultImageUrl}
        alt={alt}
        width={image.width ? image.width : '50px'}
        height={image.height ? image.height : '50px'} />
    );
  }
}

export default Image;
