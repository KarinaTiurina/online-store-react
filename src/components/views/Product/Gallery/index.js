import React, { Component, Fragment } from 'react';
import Image from './Image';

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
  }

  render() {
    const { images } = this.props;
    const mainImage = images.find(i => i.id == this.state.imageId);

    return (
      <div>
        <div>
          <Image {...mainImage}
            width='200px' />
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















