import React from 'react';
import styled from 'styled-components'

import { color } from '../theme';
import { images } from '../constants';

const Container = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${color.footer_black};
  padding: 30px 0;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
`;

const FooterItem = styled.div`
  margin: 10px 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Title = styled.div`
  font-size: 18px;
  color: ${color.grey_bg};
  margin: 20px 0;
`;

const SubTitle = styled.div`
  font-size: 17px;
  color: ${color.grey};
  margin: 10px 0;
`;

const ContactText = styled(SubTitle)`
  margin: 10px 0;
`;

const Icon = styled.img`
  height: 120px;
  margin: 0 0 10px;
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <FooterItem>
          <Icon src={images.logo_white_text} alt='图标' />
          <ContactText>电话：0771-5856126</ContactText>
          <ContactText>邮箱：gxntdsj@163.com</ContactText>
        </FooterItem>
        <FooterItem>
          <Title>行业案例与产品方案</Title>
          <SubTitle>农副食品二级节点平台</SubTitle>
          <SubTitle>制糖业二级节点平台</SubTitle>
          <SubTitle>供应链管理平台</SubTitle>
        </FooterItem>
        <FooterItem>
          <Title>合作与生态</Title>
          <SubTitle>合作联盟</SubTitle>
          <SubTitle>加入我们</SubTitle>
        </FooterItem>
        <FooterItem>
          <Title>公司概况</Title>
          <SubTitle>关于我们</SubTitle>
          <SubTitle>新闻资讯</SubTitle>
          <SubTitle>联系我们</SubTitle>
        </FooterItem>
        <FooterItem>
          <Title>关注我们</Title>
          <img src={images.weixin_QR_code} alt='微信二维码' style={{width: 100, height: 100, marginTop:20, marginLeft: -10}} />
        </FooterItem>
      </Wrapper>
      <SubTitle style={{marginTop:50}}>Copyright © 广西农投大数据科技有限公司 All Rights Reserved. 桂ICP备2022006280号-1</SubTitle>
    </Container>
  );
};

export default Footer;
