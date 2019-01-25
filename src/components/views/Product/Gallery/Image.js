import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import defaultImageUrl from 'constants/defaultImageUrl';

class Image extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.changeMainImage(this.props.id);
  }

  render() {
    const { src, width, height, alt } = this.props;

    return (
      <img src={src ? src : defaultImageUrl}
        alt={alt ? alt : '[image]'}
        width={width ? width : '50px'}
        onClick={this.handleClick} />
    );
  }
}

export default Image;
