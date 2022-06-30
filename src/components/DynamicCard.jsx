import React, { useState } from 'react';
import styled from 'styled-components';
import { color, font } from '../theme';

const STATUS = {
  origin: 'origin',
  expand: 'expand',
  collapse: 'collapse'
};

const Container = styled.div`
  margin: 0 0 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

const Card = styled.div`
  width: ${(props) => (props.status === STATUS.collapse ? '300px' : props.status === STATUS.expand ? '600px' : '400px')};
  height: 300px;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  padding: 0 30px;

  transition: 0.8s ease;
`;

const CardTitle = styled.div`
  color: ${color.text_white};
  font-size: ${font.subTitle_size};
  margin: 20px 0;
  font-weight: bold;
  height: 40px;
`;

const CardText = styled.div`
  color: ${color.text_white};
  font-size: ${font.text_size};
  visibility: hidden;
  height: 48px;

  ${Card}:hover & {
    visibility: visible;
  }
`;

const DynamicCard = ({ images, imageStatus, titles, texts }) => {
  // console.log(`参数images:${JSON.stringify(images,null,2)},status=${JSON.stringify(imageStatus,null,2)}`);
  const [status, setStatus] = useState(imageStatus);

  const handleMouseOver = (index) => {
    status.forEach((element,idx) => idx === index ? status[idx] = STATUS.expand : status[idx] = STATUS.collapse);
    setStatus([...status]);
  };

  const handleMouseOut = () => {
    const revertStatus = status.map((statu) => statu = STATUS.origin);
    setStatus([...revertStatus]);
  };

  return (
    <Container>
      {images.map((image, index) => 
        <Card
          image={image}
          key={index}
          status={status[index]} 
          onMouseOver={() => handleMouseOver(index)}
          onMouseOut={handleMouseOut}
        >
          <CardTitle>{titles[index]}</CardTitle>
          <CardText>{texts[index]}</CardText>
        </Card>
      )}
    </Container>
  );
};

export default DynamicCard;
