import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { MdOutlineAgriculture } from 'react-icons/md';
import { GiMaterialsScience, GiPlantSeed } from 'react-icons/gi';
import { BsShopWindow } from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { businessInfo, images } from '../../constants';
import * as P from '../../primitives';
import { color, font } from '../../theme';
import DiamondButton from '../../components/DiamondButton';
import DividingLine from '../../components/DividingLine';

const businessImg = [images.agriculture1, images.agriculture2, images.agriculture3, images.building1];

const Container = styled(P.FadeUpContainer)`
  padding: 30px 0;
  margin: 30px 0;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 25px;
  justify-content: center;
  align-items: center;
  background-image: url(${(props) => props.bgImage ? props.bgImage : businessImg[0]});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transition: 0.5s ease-in;
`;

const BusinessWrapper = styled.div`
  display: flex;
  padding: 2rem;
  justify-content: center;
  align-items: center;
`;

const BusinessWords = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 100px 100px 0;
  padding: 0 0 0 2rem;
`;

const BusinessTitle = styled.div`
  color: ${color.text_white};
  margin: 1rem 0;
  font-size: ${font.subTitle_size};
  font-weight: bold;
  letter-spacing: 0.5px;
`;

const BusinessTitleEN = styled.div`
  color: ${color.text_white};
  font-size: ${font.titleEN_size};
  letter-spacing: 0.5px;
`;

const BusinessIntro = styled.div`
  font-size: ${font.text_size};
  color: #fff;
  margin: 1rem 0 2rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  margin: 50px;
  justify-content: center;
  align-items: center;
`;

const Button = styled(DiamondButton)`
  border: 0 solid ${((props) => (props.isClicked ? color.blue : '#fff'))};
  // border-radius: 5px;
  transition: 0.5s ease;

  &:hover {
    cursor: pointer;
    background-color: ${color.blue};
    border-color: ${color.blue};
  }
`;

const BusinessInfo = ({ index }) => {
  return (
    <BusinessWords>
      <BusinessTitle>
        {businessInfo[index].title}
      </BusinessTitle>
      <BusinessTitleEN>
        {businessInfo[index].titleEN}
      </BusinessTitleEN>
      <DividingLine />
      <BusinessIntro>
        {businessInfo[index].introduction}
      </BusinessIntro>
    </BusinessWords>
  );
}

const Business = () => {
  const [backGroundImg, setBackGroundImg] = useState(businessImg[0]);
  const [buttonValue, setButtonValue] = useState(0);

  useEffect(()=>{
    AOS.init();
  },[]);

  const handleButtonClicked = (index) => {
    setBackGroundImg(businessImg[index]);
    setButtonValue(index);
  };

  return (
    <Container data-aos="fade-up">
      <P.MainTitle>布局农业板块</P.MainTitle>
      <P.MainTitleEN>LAYOUT OF AGRICULTURAL SECTOR</P.MainTitleEN>
      <P.TitleSub>主营业务基于当下乡村振兴的主旋律，推动农业数字化发展</P.TitleSub>
      <Wrapper bgImage={backGroundImg}>
        <BusinessWrapper>
          <BusinessInfo index={buttonValue} />
          <ButtonWrapper>
            <Button 
              title={'工业互联网'} 
              margin={'0 0 -26px 0'} 
              size={'150px'} 
              buttonColor={'rgba(0,0,0,0.6)'}
              textColor={'#fff'}
              isClicked={buttonValue === 0}
              icon={<GiMaterialsScience />}
              onClick={() => handleButtonClicked(0)}
            />
            <div style={{display: 'flex'}}>
              <Button 
                title={'农业数字化'} 
                margin={'0 50px'} 
                size={'150px'} 
                buttonColor={'rgba(0,0,0,0.6)'}
                textColor={'#fff'}
                icon={<MdOutlineAgriculture />}
                isClicked={buttonValue === 1}
                onClick={() => handleButtonClicked(1)}
              />
              <Button 
                title={'乡村振兴'} 
                margin={'0 50px'} 
                size={'150px'} 
                buttonColor={'rgba(0,0,0,0.6)'}
                textColor={'#fff'}
                icon={<GiPlantSeed />}
                isClicked={buttonValue === 2}
                onClick={() => handleButtonClicked(2)}
              />
            </div>
            <Button 
              title={'智慧农贸'} 
              margin={'-26px 0 0 0'} 
              size={'150px'} 
              buttonColor={'rgba(0,0,0,0.5)'}
              textColor={'#fff'}
              icon={<BsShopWindow />}
              isClicked={buttonValue === 3}
              onClick={() => handleButtonClicked(3)}
            />
          </ButtonWrapper>
        </BusinessWrapper>
      </Wrapper>
    </Container>
  );
};

export default Business;
