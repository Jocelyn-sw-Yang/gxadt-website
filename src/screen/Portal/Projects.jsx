import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { projectImages } from '../../constants';
import { color } from '../../theme';

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
`;

const Card = styled.div`
  width: ${(props) => (props.status === STATUS.collapse ? '300px' : props.status === STATUS.expand ? '800px' : '500px')};
  height: 500px;
  background-image: url(${projectImages[0]});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transition: 1s ease;
  margin: 0 5px;
`;
//TODO:把图片和图片的初始状态作为参数传进来(做进constant里面），然后用images.map(() => <Card />)
const Projects = (images, imageStatu) => {
  let imageStatus = [STATUS.origin,STATUS.origin,STATUS.origin];

  const [status, setStatus] = useState(imageStatus);
  console.log(`status: ${status}`);

  const handleMouseOver = () => {
    //setStatus(STATUS.expand);
  };

  const handleMouseOut = () => {
    //setStatus(STATUS.origin);
  };

  return (
    <div style={{margin:10}}>
      {/* {console.log(`imageStatus: ${imageStatus}`)} */}
      <Card onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} />
    </div>
  );
};

export default Projects;
