import React from 'react';
import { Layout as AntLayout, Menu, Icon } from 'antd';
import styled from 'styled-components';

const { Header, Content, Footer: AntFooter, Sider: AntSider } = AntLayout;

const Sider = styled(AntSider)`
  overflow: auto;
  height: 100vh;
  position: fixed;
  left: 0;
`;

const MainWrapper = styled(Content)`
  padding: 24px 16px 0;
  overflow: initial;
  min-height: calc(100vh - 133px);
`;

const Main = styled.div`
  padding: 24;
  background: #fff;
  text-align: center;
`;

const Footer = styled(AntFooter)`
  text-align: center;
`;

const THEME = 'light';

const Logo = styled.div``;

export default function Layout({ children }) {
  return (
    <AntLayout>
      <Sider theme={THEME}>
        <Logo />

        <Menu theme={THEME} mode="inline" defaultSelectedKeys={[]}>
          <Menu.Item key="1">
            <Icon type="user" />
            <span className="nav-text">nav 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" />
            <span className="nav-text">nav 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="upload" />
            <span className="nav-text">nav 3</span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="bar-chart" />
            <span className="nav-text">nav 4</span>
          </Menu.Item>
          <Menu.Item key="5">
            <Icon type="cloud-o" />
            <span className="nav-text">nav 5</span>
          </Menu.Item>
          <Menu.Item key="6">
            <Icon type="appstore-o" />
            <span className="nav-text">nav 6</span>
          </Menu.Item>
          <Menu.Item key="7">
            <Icon type="team" />
            <span className="nav-text">nav 7</span>
          </Menu.Item>
          <Menu.Item key="8">
            <Icon type="shop" />
            <span className="nav-text">nav 8</span>
          </Menu.Item>
        </Menu>
      </Sider>

      <AntLayout style={{ marginLeft: 200 }}>
        <Header style={{ background: '#fff', padding: 0 }} />

        <MainWrapper>
          <Main>{children}</Main>
        </MainWrapper>

        <Footer>EkerCode ©{new Date().getFullYear()}</Footer>
      </AntLayout>
    </AntLayout>
  );
}
