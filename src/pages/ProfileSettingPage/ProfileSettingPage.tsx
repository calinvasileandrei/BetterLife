import React from 'react'
import { Layout, Menu, Breadcrumb, Typography } from 'antd'
import './ProfileSettingPage.css'

const { Header, Content, Footer } = Layout
const { Title } = Typography

export const ProfileSettingPage = () => {
  return (
    <div>
      <Layout>
        <Header style={{ position: 'fixed', top: 0, zIndex: 1, width: '100%' }}>
          <div className='logo'>
            <Title level={2} style={{ color: 'white' }}>
              BetterLife
            </Title>
          </div>
          <Menu
            theme='dark'
            mode='horizontal'
            selectable={false}
            defaultSelectedKeys={['2']}
          >
            <Menu.Item key='1'>Your Data</Menu.Item>
            <Menu.Item key='2'>nav 2</Menu.Item>
            <Menu.Item key='3'>nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content
          className='mysite-layout'
          style={{ padding: '50px', paddingTop: 0, marginTop: 64 }}
        >
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Creating</Breadcrumb.Item>
            <Breadcrumb.Item>Profile</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className='site-layout-background'
            style={{ padding: 24, minHeight: 380 }}
          >
            content forms
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </div>
  )
}
