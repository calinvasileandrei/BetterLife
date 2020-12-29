import React from 'react'
import { Layout, Space } from 'antd'
import { NavMenu } from '../../components/NavMenu'
import './UserHomePage.css'
import { Row, Col, Typography, Progress, Card } from 'antd'
import { HeaderMenu } from '../../components/HeaderMenu'
import { withRouter } from 'react-router'
import app from '../../firebase/FirebaseContext'
import '../../style/global.css'
import { useState } from '@hookstate/core'
import globalState from '../../state/GlobalState'
import { gradientBegin, gradientEnd } from '../../style/global'
const { Header, Content, Sider } = Layout
const { Title } = Typography

const gradient = { '0%': gradientBegin, '100%': gradientEnd }

const UserHomePage = ({ history }: any) => {
  const state = useState(globalState)

  const signout = () => {
    app
      .auth()
      .signOut()
      .then(() => {
        state.currentUser.set(null)
        history.push('/')
      })
  }
  return (
    <Layout>
      <Sider className='sider'>
        <div className='spaceBetweenElementV fullHeightVh'>
          <div>
            <div className='logo'>
              <Title style={{ color: 'white' }}>BetterLife</Title>
            </div>
            <NavMenu />
          </div>
          <div
            className='centerElementH fullWidth'
            style={{
              marginBottom: 20,
              paddingBottom: 10,
            }}
          >
            <a onClick={signout}>Signout</a>
          </div>
        </div>
      </Sider>
      <Layout className='site-layout'>
        <Header style={{ height: 64 }}>
          <HeaderMenu />
        </Header>

        <Content className='content-layout'>
          <Row gutter={8}>
            <Col className='gutter-row' span={14}>
              <div className='progress-style'>
                <Title>Macros&Calories</Title>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  <Space size='large'>
                    <Col className='bottomAlign'>
                      <Progress
                        strokeColor={gradient}
                        type='circle'
                        percent={75}
                      />
                    </Col>
                    <Col>
                      <Progress
                        width={140}
                        strokeColor={gradient}
                        type='circle'
                        percent={99}
                      />
                    </Col>
                    <Col className='bottomAlign'>
                      <Progress
                        strokeColor={gradient}
                        type='circle'
                        percent={80}
                      />
                    </Col>
                  </Space>
                </Row>
              </div>
              <div className='scrollabel-list'>
                <Card
                  title='Breakfast'
                  extra={<a onClick={() => console.log('other')}>More</a>}
                  className='custom-card'
                >
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
                <Card title='Lunch' className='custom-card'>
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
                <Card title='Dinner' className='custom-card'>
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
              </div>
            </Col>
            <Col className='gutter-row' span={10}>
              <div>
                <Title level={2}>Next Meal</Title>
                <Card title='Breakfast' className='custom-card'>
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
                <div className='mealinfo-box'>
                  <Card title='Meal Info' className='custom-card'>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                  </Card>
                </div>
              </div>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  )
}

export default withRouter(UserHomePage)
