import React from 'react';
import styled from 'styled-components';

import { projectImages } from '../../constants';
import { color, font } from '../../theme';
import DynamicCard from '../../components/DynamicCard';

const Container = styled.div`
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  color: ${color.text};
  font-size: ${font.title_size};
  font-weight: bold;
  margin: 30px 0;
  letter-spacing: 0.5px;
`;

const TitleSub = styled.div`
  color: ${color.grey};
  font-size: ${font.text_size};
  margin: 0 0 40px;
  letter-spacing: 0.5px;
`;

const Projects = () => {
  return (
    <Container>
      <Title>赋能农业转型升级</Title>
      <TitleSub>提供全方位的智慧农业解决方案，助力企业数字化、智能化转型和产业链协同升级</TitleSub>
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
