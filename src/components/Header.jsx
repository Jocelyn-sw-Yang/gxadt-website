import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

import { color } from '../theme';
import { images } from '../constants';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  padding: 0 2rem;
  border-bottom: 1px solid grey;
`;

const Company = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled.img`
  height: 100px;
`;

const Link = styled(NavLink)`
  text-decoration:none;
  height: 100%;
  text-align: center;
  padding: 2rem;
  line-height: 18px;
  font-size: 18px;
  box-sizing: border-box;

  &:hover {
    color: ${color.blue};
    border-bottom: 3px solid ${color.blue};
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <Company>
        <Icon src={images.logo_with_name} alt='图标'/>
      </Company>
      <Link to='/'>首页</Link>
      <Link to='/SolutionCase'>行业解决案例</Link>
      <Link to='/Company'>公司概况</Link>
      <Link to='/ContactUs'>联系我们</Link>
    </Wrapper>
  );
};

export default Header;
