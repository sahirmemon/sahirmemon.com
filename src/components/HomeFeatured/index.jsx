import React from 'react';
import cx from 'classnames';

import bind from '../../shared/decorators/bind';
import './index.scss';

class HomeFeatured extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div className='home-section'>
        <h1>FEATURED</h1>
      </div>
    );
  }
}

export default HomeFeatured;
