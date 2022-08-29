import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

import { color } from '../theme';
import { images } from '../constants';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  background-color: ${color.text_white};
  height: 5rem;
  padding: 0 2rem;
  box-shadow: 0 0 30px rgba(0,0,0,0.13);
`;

const Company = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled.img`
  height: 100px;
`;

const Dropdown = styled.div`
  position: relative;
  height: 100%;
  padding: 28px 2rem;
  box-sizing: border-box;
  transition: 0.3s ease;

  &:hover {
    border-bottom: 4px solid ${color.blue};
  }
`;

const DropdownContent = styled.div`
  position: absolute;
  // display: none;
  // visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 0;
  top: 80px;
  left: -15px;
  background-color: ${color.text_white};
  width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 0 25px;
  transition: 0.2s ease;

  ${Dropdown}:hover & {
    // display:block;
    // visibility: visible;
    height: 180px;
    padding: 12px 25px;
  }
`;

const Link = styled(NavLink)`
  text-decoration:none;
  text-align: center;
  line-height: 18px;
  font-size: 18px;
  color: ${color.text};
  padding: 30px 0;
  transition: 0.2s ease;

  ${Dropdown}:hover & {
    color: ${color.blue};
  }
`;

const SubLink = styled(NavLink)`
  text-decoration:none;
  visibility: hidden;
  line-height: 24px;
  font-size: 16px;
  color: ${color.text};
  padding: 10px 0;

  ${Dropdown}:hover & {
    visibility: visible;
  }
`;

const DividedLine = styled.div`
  height: 1px;
  width: 180px;
  visibility: hidden;
  background-color: #dbdbdb;
  margin: 5px 0;

  ${Dropdown}:hover & {
    visibility: visible;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <Company>
        <Icon src={images.logo_with_name} alt='图标'/>
      </Company>
      <Dropdown>
        <Link to='/'>首页</Link>
      </Dropdown>
      <Dropdown>
        <Link to='/SolutionCase'>行业解决案例</Link>
        <DropdownContent>
          <SubLink to='/SolutionCase'>农副食品加工行业标识解析二级节点</SubLink>
          <DividedLine />
          <SubLink to='/SolutionCase'>制糖行业标识解析二级节点</SubLink>
        </DropdownContent>
      </Dropdown>
      <Dropdown>
        <Link to='/SolutionCase'>产品中心</Link>
      </Dropdown>
      <Dropdown>
        <Link to='/Company'>公司概况</Link>
      </Dropdown>
      <Dropdown>
        <Link to='/ContactUs'>联系我们</Link>
      </Dropdown>
    </Wrapper>
  );
};

export default Header;
