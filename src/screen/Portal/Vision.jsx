import React from 'react';
import styled from 'styled-components';

import { color, font } from '../../theme';
import * as P from '../../primitives';
import { images, visions } from '../../constants';
import DividingLine from '../../components/DividingLine';

const Container = styled(P.FadeUpContainer)`
  margin: 30px 0;
`;

const VisionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  // background-color: ${color.grey_bg};
  max-width: 1400px;
  width: 80%;
`;

const VisionImage = styled.div`
  width: 50%;
  height: auto;
`;

const VisionText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  padding: 50px 85px;
`;

const VisionTextInvert = styled(VisionText)`
  align-items: flex-end;
`;

const Title = styled.div`
  color: ${color.text};
  font-size: ${font.subTitle_size};
  font-weight: bold;
  margin: 10px 0;
  letter-spacing: 0.5px;
`;

const TitleEN = styled.div`
  color: ${color.grey};
  font-size: ${font.titleEN_size};
  letter-spacing: 0.5px;
`;

const Text = styled.div`
  color: ${color.text};
  font-size: ${font.text_size};
  margin: 10px 0 20px;
  letter-spacing: 0.5px;
`;

const TextInvert = styled(Text)`
  text-align: right;
`;

const Vision = () => {
  // TODO: 把所有图片大小都变成600*400（比例）
  return (
    <Container>
      <P.MainTitle>公司愿景</P.MainTitle>
      <P.MainTitleEN>COMPANY VISION</P.MainTitleEN>
      <P.TitleSub>推动乡村振兴，为三农赋能，聚焦农业大数据，力争成为农业数字化领域的排头企业</P.TitleSub>
      <VisionWrapper>
        <VisionImage>
          <img src={images.agriculture1} alt='我们的愿景' style={{width: '100%', display:'block'}} />
        </VisionImage>
        <VisionText>
          <Title>{visions[0].title}</Title>
          <TitleEN>{visions[0].title_EN}</TitleEN>
          <DividingLine />
          <Text>{visions[0].text}</Text>
        </VisionText>
      </VisionWrapper>
      <VisionWrapper>
        <VisionTextInvert>
          <Title>{visions[1].title}</Title>
          <TitleEN>{visions[1].title_EN}</TitleEN>
          <DividingLine />
          <TextInvert>{visions[1].text}</TextInvert>
        </VisionTextInvert>
        <VisionImage>
          <img src={images.agriculture2} alt='我们的愿景' style={{width: '100%'}} />
        </VisionImage>
      </VisionWrapper>
    </Container>
  );
};

export default Vision;
