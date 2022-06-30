import React from 'react';
import styled from 'styled-components';

import { color } from '../theme';

const Line = styled.div`
  width: 55px;  
  height: 3px;
  background-color: ${color.blue};
  margin: 25px 0;
`;

const DividingLine = () => {
  return (
    <Line />
  );
};

export default DividingLine;
