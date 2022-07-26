import React from 'react';
import styled from 'styled-components';

import { projectImages } from '../../constants';
import * as P from '../../primitives';
import DynamicCard from '../../components/DynamicCard';

const Container = styled.div`
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Projects = () => {
  return (
    <Container>
      <P.MainTitle>赋能农业转型升级</P.MainTitle>
      <P.MainTitleEN>PROMOTING AGRICULTURE UPGRADING</P.MainTitleEN>
      <P.TitleSub>提供全方位的智慧农业解决方案，助力企业数字化、智能化转型和产业链协同升级</P.TitleSub>
      <DynamicCard 
        images={projectImages[0].map((pm) => pm.image)}
        imageStatus={projectImages[0].map((pm) => pm.status)}
        titles={projectImages[0].map((pm) => pm.title)}
        texts={projectImages[0].map((pm) => pm.text)}
      />
      <DynamicCard 
        images={projectImages[1].map((pm) => pm.image)}
        imageStatus={projectImages[1].map((pm) => pm.status)}
        titles={projectImages[0].map((pm) => pm.title)}
        texts={projectImages[0].map((pm) => pm.text)}
      />
    </Container>
  );
};

export default Projects;
