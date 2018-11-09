import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Image extends Component {
  constructor(props) {
    super(props);

    this.src = props.src;
    this.alt = props.alt;
    this.imageStyle = {
      width: props.width,
      height: props.height
    };
  }

  render() {
    const { src, alt, imageStyle } = this;

    return (
      <img src={src} alt={alt} style={imageStyle} />
    );
  }
}

export default Image;
