import React from 'react';
import styled from 'styled-components';

import bind from '../../shared/decorators/bind';
import heroVideo from '../../../static/media/hero.mp4';
import heroBkg from '../../../static/assets/bkg.jpg';
import './hero.scss';

class Hero extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      width: 0
    };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  @bind
  updateWindowDimensions() {
    this.setState({
      width: window.innerWidth
    });
  }

  render() {
    const { width } = this.state;
    const showVideo = width > 991 ? true : false;
    return (
      <div className='hero'>
        {showVideo && <video className='hero-video' autoPlay muted src={heroVideo}></video> }
        {!showVideo && <img className='hero-image' src={heroBkg} /> }
        <div className='hero-introduction'>
          <span className='headline'>Hi, I'm Sahir Memon.</span>
          <span className='sub-headline'>I'm a full-stack engineer in Atlanta.</span>
          <span className='sub-headline'>I also tinker around with VR and drones.</span>
        </div>
      </div>
    );
  }
}

export default Hero;
