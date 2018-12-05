import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import request from 'superagent';
import apiBase from '~/constants/apiBase.js';
import Info from './Info';

class Image extends Component {
  constructor(props) {
    super(props);

    this.state = { image: null, isLoading: true }
  }

  componentDidMount() {
    request
      .get(`http://${apiBase}/images/${this.props.match.params.id}`)
      .end((err, res) => (
        !err ?
          this.setState({image: res.body, isLoading: false}) :
          this.setState({isLoading: false})
      ));
  }

  render() {
    const { image, isLoading } = this.state;

    return (
      <Fragment>
        { !isLoading &&
            <Info image={image} />
        }
      </Fragment>
    );
  }
}

export default withRouter(Image);
