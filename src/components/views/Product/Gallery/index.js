import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Image from './Image';
import defaultImageUrl from 'constants/defaultImageUrl';

class Gallery extends Component {
  constructor(props) {
    super(props);

    const imageId = this.props.images.length > 0 ?
      this.props.images[0].id :
      -1

    this.state = { imageId }

    this.changeMainImage = (newId) => {
      this.setState({imageId: newId})
    }

    this.prevImage = this.prevImage.bind(this);
    this.nextImage = this.nextImage.bind(this);
  }

  prevImage() {
    const { images } = this.props;
    const mainImageIndex = images.findIndex(i => i.id == this.state.imageId);
    const newIndex = mainImageIndex == 0 ? images.length - 1 : mainImageIndex-1;
    this.setState({imageId: images[newIndex].id})
  }

  nextImage() {
    const { images } = this.props;
    const mainImageIndex = images.findIndex(i => i.id == this.state.imageId);
    const newIndex = mainImageIndex == images.length - 1 ? 0 : mainImageIndex+1;
    this.setState({imageId: images[newIndex].id})
  }

  render() {
    const { images } = this.props;
    let mainImage = images.find(i => i.id == this.state.imageId);
    if (!mainImage) {
      mainImage = {
        src: defaultImageUrl
      }
    }

    return (
      <div>
        <div>
          <a onClick={this.prevImage}>&larr;</a>
            <Link key={mainImage.id} to={{
              pathname: `/images/${mainImage.id}`,
              state: { modal: true }
            }}>
              <img src={mainImage.src ? mainImage.src : defaultImageUrl}
                alt='[image]'
                width='200px' />
            </Link>
          <a onClick={this.nextImage}>&rarr;</a>
        </div>
        { images.length > 0 ? (
            images.map((image) => (
              <Image {...image}
                key={image.id}
                changeMainImage={this.changeMainImage} />
            ))
          ) : (
            <Image />
          )
        }
      </div>
    );
  }
}

export default Gallery;















