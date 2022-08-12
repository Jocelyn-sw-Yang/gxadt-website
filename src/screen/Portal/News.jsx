import React from 'react';
import styled from 'styled-components';

import { color, font } from '../../theme';
import * as P from '../../primitives';
import { news } from '../../constants';
import NewsCard from '../../components/NewsCard';

const Container = styled(P.FadeUpContainer)`
  margin: 30px 0;
  justify-content: space-between;
  background-color: ${color.grey_bg};
  padding: 30px 0;
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
      <P.MainTitle>新闻资讯</P.MainTitle>
      <P.MainTitleEN>NEWS AND INFORMATION</P.MainTitleEN>
      <P.TitleSub>了解桂农数科的最新动态与资讯</P.TitleSub>
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
