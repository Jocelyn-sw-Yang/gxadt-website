import React, { useState } from 'react';
import styled from 'styled-components';
import { MdOutlineAgriculture } from 'react-icons/md';
import { GiMaterialsScience, GiPlantSeed } from 'react-icons/gi';
import { BsShopWindow, BsStars } from 'react-icons/bs';

import { businessInfo, images } from '../../constants';
import * as P from '../../primitives';
import { color, font } from '../../theme';
import DiamondButton from '../../components/DiamondButton';

const businessImg = [images.agriculture1, images.agriculture2, images.agriculture3, images.building1];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  justify-content: center;
  align-items: center;
  background-image: url(${(props) => props.bgImage ? props.bgImage : businessImg[0]});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Title = styled.div`
  color: ${color.text_white};
  font-size: ${font.title_size};
  font-weight: bold;
  margin: 10px 0 0;
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
`;

const BusinessTitle = styled.div`
  font-size: ${font.title_size};
  color: #fff;
  margin: 2rem;
`;

const BusinessIntro = styled.div`
  font-size: ${font.text_size};
  color: #fff;
  margin: 0 2rem 2rem;
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
        {businessInfo[index].name}
      </BusinessTitle>
      <BusinessIntro>
        {businessInfo[index].introduction}
      </BusinessIntro>
    </BusinessWords>
  );
}

const Business = () => {
  const [backGroundImg, setBackGroundImg] = useState(businessImg[0]);
  const [buttonValue, setButtonValue] = useState(0);

  const handleButtonClicked = (index) => {
    setBackGroundImg(businessImg[index]);
    setButtonValue(index);
  };

  return (
    <Container bgImage={backGroundImg}>
      <Title>布局农业板块</Title>
      <BusinessWrapper>
        <BusinessInfo index={buttonValue} />
        <ButtonWrapper>
          <Button 
            title={'工业互联网'} 
            margin={'0 0 -26px 0'} 
            size={'150px'} 
            buttonColor={'rgba(0,0,0,0)'}
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
              buttonColor={'rgba(0,0,0,0.3)'}
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
    </Container>
  );
};

export default Business;
