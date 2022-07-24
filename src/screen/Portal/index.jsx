import React from 'react';
import styled from 'styled-components';

import { images } from '../../constants';
import Header from '../../components/Header';
import Rooter from '../../components/Rooter';
import Business from './Business';
import Introduction from './Introduction';
import Projects from './Projects';
import Vision from './Vision';
import News from './News';
import Partner from './Partner';

const businessImg = [images.agriculture1, images.agriculture2, images.agriculture3, images.building1];

const Banner = styled.div`
  display: flex;
`;

const Intro = styled.div`
  display: flex;
  margin: 2rem 0;
  justify-content: center;
  align-items: center;
`;

const Portal = () => {

  return (
    <div>
      <Header />
      <Banner>
        <img src={images.banner} alt='banner' />
      </Banner>
      <Intro>
        <Introduction />
      </Intro>
      <Business />
      <Projects />
      <Vision />
      <News />
      <Partner />
    </div>
  );
};

export default Portal;
