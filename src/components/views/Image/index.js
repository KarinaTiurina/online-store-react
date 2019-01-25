import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import request from 'superagent';
import apiBase from 'constants/apiBase.js';
import Info from './Info';

class Image extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const image = this.props.item;
    const { isFetching } = this.props;

    return (
      <Fragment>
        { !isFetching &&
            <Info image={image} />
        }
      </Fragment>
    );
  }
}

export default withRouter(Image);
