import styled from 'styled-components';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { color, font } from './theme';


export const MainTitle = styled.div`
  color: ${color.text};
  font-size: ${font.title_size};
  font-weight: bold;
  margin: 10px 0 30px;
  letter-spacing: 2px;
  z-index: 5;
`;

export const MainTitleEN = styled.div`
  color: ${color.titleEN};
  font-size: ${font.title_size};
  font-weight: bold;
  margin: -60px 0 15px;
  letter-spacing: 2px;
`;

export const TitleSub = styled.div`
  color: ${color.grey};
  font-size: ${font.text_size};
  margin: 0 0 40px;
  letter-spacing: 0.5px;
`;

const ContainerFadeUp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FadeUpContainer = (props) => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  },[]);
  console.log(props);
  return (
    <ContainerFadeUp data-aos="fade-up" data-aos-delay="200" {...props}>{props.children}</ContainerFadeUp>
  );
};
