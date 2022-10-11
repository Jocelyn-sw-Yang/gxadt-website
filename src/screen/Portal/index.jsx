import React from 'react';
import styled from 'styled-components';

import { images, bannerIntro } from '../../constants';
import Header from '../../components/Header';
import Rooter from '../../components/Rooter';
import Business from './Business';
import Introduction from './Introduction';
import Projects from './Projects';
import Vision from './Vision';
import News from './News';
import Partner from './Partner';
import Footer from '../../components/Footer';
import Banner from './Banner';

const Portal = () => {
  return (
    <div>
      <Header />
      {/* <div style={{display: 'flex', height: '100vh'}}>
        <video autoPlay loop muted preload='auto' style={{display: 'flex', width: '100%', height: '100%', objectFit: 'cover'}}>
          <source type="video/mp4" src={bannerIntro}/>
          您的浏览器不支持 video 视频播放。
        </video>
      </div> */}
      <Banner />
      <Introduction />
      <Business />
      <Projects />
      <Vision />
      <News />
      <Partner />
      <Footer />
    </div>
  );
};

export default Portal;
