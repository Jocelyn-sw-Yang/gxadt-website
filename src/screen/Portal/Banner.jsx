import React from 'react';
import styled from 'styled-components';

import { bannerIntro } from '../../constants';

const Container = styled.div`
  height: 100vh;
  display: flex;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Banner = () => {
  return (
    <Container>
      <Video 
        autoPlay 
        loop 
        muted 
        preload='auto'
      >
        <source type="video/mp4" src={bannerIntro}/>
        您的浏览器不支持 video 视频播放。
      </Video>
    </Container>
  );
};

export default Banner;
