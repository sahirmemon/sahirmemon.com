import React from 'react';
import styled from 'styled-components';

import heroVideo from '../../../static/media/hero.mp4';

class Hero extends React.Component {
  render() {
    return (
      <div>
        <video autoPlay muted src={heroVideo} />
      </div>
    );
  }
}

export default Hero;
