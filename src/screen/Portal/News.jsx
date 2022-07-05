import React from 'react';
import styled from 'styled-components';

import { color, font } from '../../theme';
import { images, news } from '../../constants';
import NewsCard from '../../components/NewsCard';

const Container = styled.div`
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${color.grey_bg};
  padding: 30px 0;
`;

const MainTitle = styled.div`
  color: ${color.text};
  font-size: ${font.title_size};
  font-weight: bold;
  margin: 10px 0 30px;
  letter-spacing: 0.5px;
  z-index: 5;
`;

const MainTitleEN = styled.div`
  color: ${color.titleEN};
  font-size: ${font.title_size};
  font-weight: bold;
  margin: -60px 0 15px;
  letter-spacing: 2px;
`;

const TitleSub = styled.div`
  color: ${color.grey};
  font-size: ${font.text_size};
  margin: 0 0 40px;
  letter-spacing: 0.5px;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  width: 80%;
`;

const Button = styled.button`
  width: 120px;
  padding: 10px 20px;
  margin: 50px 0 20px;
  background-color: ${color.button_origin};
  border: 1px solid ${color.button_clicked};
  border-radius: 5px;
  color: ${color.button_clicked};
  font-size: 16px;

  &:hover {
    color: ${color.button_origin};
    background-color: ${color.button_clicked};
  }
`;

const News = () => {

  const handleClick = () => {
    console.log('点击查看更多')
  };

  return (
    <Container>
      <MainTitle>新闻资讯</MainTitle>
      <MainTitleEN>NEWS AND INFORMATION</MainTitleEN>
      <TitleSub>了解桂农数科的最新动态与资讯</TitleSub>
      <CardWrapper>
        {news.map((news, index) => 
          <NewsCard key={index} news={news} />
        )}
      </CardWrapper>
      <Button onClick={handleClick}>查看更多</Button>
    </Container>
  );
};

export default News;
