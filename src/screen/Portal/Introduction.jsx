import React from 'react';
import styled from 'styled-components';

import { images } from '../../constants';
import { color, font } from '../../theme';

const Title = styled.div`
  font-size: ${font.title_size};
  font-weight: bold;
  color: ${color.text};
  text-align: center;
  margin: 15px 0;
`;

const Wrapper = styled.div`
  width: 1100px;
  height: auto;
  background-color: #fff;
  margin: 50px 0;
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
    <div>
      <Title>了解桂农数科</Title>
      <Wrapper>
        <CompanyImg />
        <IntroWords>
          <IntroTitle>具有“专业、技术、可信赖”三大核心优势</IntroTitle>
          <Text>广西农投大数据科技有限公司简称<b>“桂农数科”</b>。<br/>具有“专业、技术、可信赖”三大核心优势.具有“专业、技术、可信赖”三大核心优势.具有“专业、技术、可信赖”三大核心优势.具有“专业、技术、可信赖”三大核心优势</Text>
          <ListWrapper>
            <SubText>● 1个主要目标</SubText>
            <SubText>● 2个行业节点</SubText>
            <SubText>● 3个关键领域</SubText>
            <SubText>● 8个研发方向</SubText>
          </ListWrapper>
        </IntroWords>
      </Wrapper>
    </div>
  )
}

export default Introduction;
