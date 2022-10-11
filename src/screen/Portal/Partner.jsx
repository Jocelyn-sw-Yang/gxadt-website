import React from 'react';
import styled from 'styled-components';

import { color, font } from '../../theme';
import * as P from '../../primitives';
import { images } from '../../constants';

const Container = styled(P.FadeUpContainer)`
  margin: 30px 0;
  justify-content: space-between;
  background-color: #fff;
  padding: 30px;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 1240px;
  width: 80%;
`;

// const Logo = styled.img`
//   margin: 10px;
//   min-width: 100px;
// `;

const Logo = styled.div`
  width: 250px;
  height: 80px;
  margin: 20px 0;
  min-width: 100px;
  background-color: salmon;
`;

const Partner = () => {
  return (
    <Container>
      <P.MainTitle>合作伙伴</P.MainTitle>
      <P.MainTitleEN>STRATEGIC PARTNERS</P.MainTitleEN>
      <P.TitleSub>战略合作伙伴生态圈</P.TitleSub>
      <LogoWrapper>
        {/* {images.logos.map((logo, index) => <Logo key={index} src={logo} alt='企业LOGO' />)} */}
        {images.logos.map((logo, index) => <Logo key={index}/>)}
      </LogoWrapper>
    </Container>
  );
};

export default Partner;
