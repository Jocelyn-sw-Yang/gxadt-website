import React from 'react';
import styled from 'styled-components';
import { images } from '../constants';

import { color, font } from '../theme';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 26%;
  height: 450px;
  margin: 0 30px;
  background-color: #fff;
`;

const ImageView = styled.div`
  width: 100%;
  height: 45%;
  opacity: 1;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  ${Container}:hover & {
    opacity: 0.7;
  }
`;

const NewsInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 20px 30px;
`;

const Title = styled.div`
  color: ${color.text};
  font-size: ${font.text_size};
  font-weight: bold;
  margin: 10px 0;
  letter-spacing: 0.5px;
`;

//TODO:把标题也改成超过两行就变成省略号，再补充按钮，调整体的背景颜色
const Text = styled.div`
  color: ${color.text};
  font-size: 14px;
  margin: 10px 0;
  letter-spacing: 0.5px;
  width: 100%;
  // height: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  -ms-text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  -webkit-text-overflow: ellipsis;
  // white-space: nowrap;
  position:relative;
  line-height:20px;
  max-height:40px;

  :after{
    content: "...";
    position: absolute;
    bottom: 0;
    right: 5px;
    color: rgba(0, 0, 0, 0.5);
    padding-left:40px;
    background:
    -webkit-linear-gradient(left,transparent,#fff 80%);
    background:
    -o-linear-gradient(right,transparent,#fff 80%);
    background:
    -moz-linear-gradient(right,transparent,#fff 80%);
    background:
    linear-gradient(to right,transparent,#fff 80%);
}
`;

const Date = styled.div`
  color: ${color.grey};
  font-size: 14px;
  margin: 10px 0;
  letter-spacing: 0.5px;
  text-align: right;
`;

const NewsCard = ({ news }) => {
  return (
    <Container>
      <ImageView src={news.image} />
      <NewsInfo>
        <Title>{news.title}</Title>
        <Text>{news.text}</Text>
        <Date>{news.date}</Date>
      </NewsInfo>
    </Container>
  );
};

export default NewsCard;
