import React from 'react';

import ImagePage from '~/src/components/views/Image';
import { imagePath }  from '~/src/helpers/routes';

export default {
  path: imagePath(),
  render: ({ match }) => (
    <ImagePage id={match.params.id} />
  )
};
