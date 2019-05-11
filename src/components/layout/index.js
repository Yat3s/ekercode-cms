import React from 'react';
import { Layout as AntLayout, Menu, Icon } from 'antd';
import styled from 'styled-components';
import { withRouter, Link } from 'react-router-dom';

import LOGO_IMAGE from './logo.png';

const {
  Header: AntHeader,
  Content,
  Footer: AntFooter,
  Sider: AntSider,
} = AntLayout;

const Sider = styled(AntSider)`
  overflow: auto;
  height: 100vh;
  position: fixed;
  left: 0;
`;

const SiderContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  flex-wrap: wrap;
`;

const SiderMenu = styled(Menu)`
  margin-top: auto;
  flex: 1;
`;

const SiderMenuItem = styled(Menu.Item)`
  user-select: none;
`;

const MainLayout = styled(AntLayout)`
  margin-left: 200px;
`;

const MainWrapper = styled(Content)`
  padding: 24px 16px 0;
  overflow: initial;
  /* 64px 是 header 的高度 */
  /* 69px 是 footer 的高度 */
  min-height: calc(100vh - 69px);
`;

const Header = styled(AntHeader)`
  background: #fff;
  padding: 0;
`;

const Main = styled.div`
  /* padding: 2em; */
  padding: 24px;
  background: #fff;
  border-radius: 4px;
`;

const Footer = styled(AntFooter)`
  text-align: center;
`;

const THEME = 'light';

const Logo = styled.div`
  height: 64px;
  /* border-bottom: 1px solid rgba(0, 0, 0, 0.05); */
  border-right: 1px solid #e8e8e8;
  padding: 1em;
  background-image: url(${LOGO_IMAGE});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 80%;
`;

const menus = [{ route: '/trials', label: '报名注册学生', icon: 'table' }];

function Layout({ children, history, location: { pathname }, ...props }) {
  const menuNodes = menus.map(({ route, label, icon }, index) => {
    return (
      <SiderMenuItem
        key={route || index}
        onClick={() => {
          history.push(route);
        }}
      >
        <Icon type={icon} />
        <span>{label}</span>
      </SiderMenuItem>
    );
  });

  const selectedKeys = menus
    .filter(({ route }) => {
      if (!route) return false;
      return pathname.startsWith(route);
    })
    .map(({ route }) => route);

  return (
    <AntLayout>
      <Sider theme={THEME}>
        <SiderContentContainer>
          <Link to="/">
            <Logo />
          </Link>

          <SiderMenu theme={THEME} mode="inline" selectedKeys={selectedKeys}>
            {menuNodes}
          </SiderMenu>
        </SiderContentContainer>
      </Sider>

      <MainLayout>
        {/* <Header /> */}

        <MainWrapper>
          <Main>{children}</Main>
        </MainWrapper>

        <Footer>EkerCode ©{new Date().getFullYear()}</Footer>
      </MainLayout>
    </AntLayout>
  );
}

export default withRouter(Layout);
