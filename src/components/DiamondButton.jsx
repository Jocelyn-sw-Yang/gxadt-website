import React from 'react';
import styled from 'styled-components';

import { color } from '../theme';

const BusinessButton = styled.button`
  width: ${(props) => (props.size || '150px')};
  height: ${(props) => (props.size || '150px')};
  background-color: ${(props) => (props.isClicked? color.blue : props.buttonColor)};
  -webkit-transform:rotate(45deg);  //Webkit / Safari / Chrome
  -moz-transform:rotate(45deg);  //Firefox
  -ms-transform:rotate(45deg);  //Internet Explorer
  -o-transform:rotate(45deg);  //Opera
  transform:rotate(45deg);
  margin: ${(props) => (props.margin || '0')};
`;

const Content = styled.div`
  -webkit-transform:rotate(-45deg);  //Webkit / Safari / Chrome
  -moz-transform:rotate(-45deg);  //Firefox
  -ms-transform:rotate(-45deg);  //Internet Explorer
  -o-transform:rotate(-45deg);  //Opera
  transform:rotate(-45deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: ${(props) => (props.textSize || '1rem')};
  color: ${(props) => (props.textColor)};
`;

const Icon = styled.div`
  font-size: 45px;
  color: ${(props) => (props.textColor)};
`;

const DiamondButton = ({
  title,
  buttonColor,
  textColor = color.text,
  size,
  textSize = '20px',
  margin,
  isClicked,
  icon,
  ...props
}) => {
  return (
    <BusinessButton isClicked={isClicked} buttonColor={buttonColor} size={size} margin={margin} {...props}>
      <Content>
        <Icon textColor={textColor}>{icon}</Icon>
        <Title textColor={textColor} textSize={textSize}>{title}</Title>
      </Content>
    </BusinessButton>
  );
};

export default DiamondButton;
