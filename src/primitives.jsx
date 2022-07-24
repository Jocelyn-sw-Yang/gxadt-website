import styled from 'styled-components';

import { color, font } from './theme';


export const MainTitle = styled.div`
  color: ${color.text};
  font-size: ${font.title_size};
  font-weight: bold;
  margin: 10px 0 30px;
  letter-spacing: 0.5px;
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
