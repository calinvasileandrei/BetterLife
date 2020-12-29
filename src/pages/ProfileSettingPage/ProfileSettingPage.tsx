import React from 'react'
import {
  Layout,
  Menu,
  Breadcrumb,
  Typography,
  Card,
  Form,
  Input,
  Button,
  DatePicker,
} from 'antd'
import './ProfileSettingPage.css'
import { gradientBegin, gradientEnd, primaryColor } from '../../style/global'
import { UserInfoCardFirst } from './insideComponents/UserInfoCardFirst'
import { UserInfoCardSecond } from './insideComponents/UserInfoCardSecond'
import { UserInfoCardThird } from './insideComponents/UserInfoCardThird'

const { Header, Content, Footer } = Layout
const { Title } = Typography

export const ProfileSettingPage = () => {
  return (
    <div>
      <Layout style={{ height: '100vh' }}>
        <Header
          style={{ position: 'absolute', top: 0, zIndex: 2, width: '100%' }}
        >
          <div className='logo'>
            <Title level={2} style={{ color: 'white' }}>
              BetterLife
            </Title>
          </div>
        </Header>
        <Content
          className='mysite-layout'
          style={{
            paddingTop: 0,
            marginTop: 64,
            height: '100%',
          }}
        >
          <div
            className='site-layout-background'
            style={{
              padding: 24,
              height: '100%',
              background: `linear-gradient(to top, ${gradientBegin}, ${primaryColor})`,
            }}
          >
            <Title style={{ color: 'white' }}>Hello There 👋</Title>
            <UserInfoCardFirst
              mystyle={{ position: 'absolute', top: 150, left: 20 }}
            />
            <Title
              style={{
                color: 'white',
                position: 'absolute',
                top: 250,
                left: 500,
              }}
            >
              Well, Let's continue!💪🏻
            </Title>
            <UserInfoCardSecond
              mystyle={{ position: 'absolute', top: 300, left: 500 }}
            />
            <UserInfoCardThird
              mystyle={{ position: 'absolute', top: 100, left: 1000 }}
            />
            <Title
              style={{
                color: 'white',
                position: 'absolute',
                top: 400,
                left: 1000,
              }}
            >
              We are done ! 🎉
            </Title>
          </div>
        </Content>
      </Layout>
    </div>
  )
}
