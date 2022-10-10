import React from 'react';
import styled from 'styled-components';

import { images } from '../../constants';
import { color, font } from '../../theme';
import * as P from '../../primitives';

const Container = styled.div`
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 1100px;
  height: auto;
  background-color: #fff;
  margin: 5px 0;
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  box-shadow: 0 0 8px #aaa;
  overflow: hidden;
`;

const CompanyImg = styled.div`
  width: 700px;
  height: 500px;
  background-image: url(${images.building3});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const IntroWords = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 30px;
  justify-content: space-between;
  align-items: center;
  color: #000;
`;

const IntroTitle = styled.div`
  font-size: ${font.subTitle_size};
  font-weight: bold;
  color: ${color.blue};
`;

const Text = styled.div`
  font-size: ${font.text_size};
  color: ${color.text};
`;

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const SubText = styled.div`
  font-size: ${font.text_size};
  color: ${color.grey};
  margin: 10px;
`;

const Introduction = () => {
  return (
    <Container>
      <P.MainTitle>了解桂农数科</P.MainTitle>
      <P.MainTitleEN>GUANGXI AGRICULTURAL DIGITAL TECHNOLOGY</P.MainTitleEN>
      <P.TitleSub>以农副食品加工行业和制糖行业两个国家工业互联网二级节点为依托，打造企业IP ——“桂农数科”</P.TitleSub>
      <Wrapper>
        <CompanyImg />
        <IntroWords>
          <IntroTitle>具有“农业、数据、创新”三大核心</IntroTitle>
          <Text>&emsp;&emsp;公司秉承“产业互联、数据驱动”的发展理念，基于当下乡村振兴的主旋律，以两个工业互联网二级节点项目的建设为契机，打造企业IP——<b>“桂农数科”</b>，推动广西农业产业标准化，产业标准数字化，产业数据资产化的农业产业新经济进程，助力广西农产品品质提升和品牌铸造，创造农业新价值，以数字赋能推动乡村振兴发展。</Text>
          <ListWrapper>
            <SubText>● 1个主要目标</SubText>
            <SubText>● 2个行业节点</SubText>
            <SubText>● 3个关键领域</SubText>
            <SubText>● 8个研发方向</SubText>
          </ListWrapper>
        </IntroWords>
      </Wrapper>
    </Container>
  )
}

export default Introduction;
