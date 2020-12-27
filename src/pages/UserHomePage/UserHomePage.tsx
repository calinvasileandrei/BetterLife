import React from 'react'
import { Layout } from 'antd';
import { NavMenu } from '../../components/NavMenu';
import './UserHomePage.css'
import { Row, Col,Typography,Progress,Card } from 'antd';
import { HeaderMenu } from '../../components/HeaderMenu';



const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;
const gradient ={'0%': '#108ee9','100%': '#87d068'};
const bottomAlign= {display: 'inline-block' ,alignSelf: 'flex-end'}
const centerAlign= {display: 'inline-block' ,alignSelf: 'flex-center'}


export const UserHomePage = () => {
    return (
  <Layout>
    <Sider className="sider">
      <div className="logo">
        <Title style={{color:'white'}}>BetterLife</Title>
      </div>
      <NavMenu/>
    </Sider>
    <Layout className="site-layout">
      <Header style={{height:64}}>
        <HeaderMenu />
      </Header>

      <Content className='content-layout'>
                <Row gutter={8}>
                  <Col className="gutter-row" span={14}>
                    <div className='progress-style' >
                      <Title>Macros&Calories</Title>
                      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{marginBottom:32}} >
                        <Col style={bottomAlign}> 
                          <Progress strokeColor={gradient} type="circle" percent={75} /> 
                        </Col>
                        <Col>
                          <Progress width={140} strokeColor={gradient} type="circle" percent={99} />
                        </Col>
                        <Col style={bottomAlign}>
                          <Progress strokeColor={gradient} type="circle" percent={80} />
                        </Col>
                      </Row>
                    </div>
                    <div className='scrollabel-list' >
                      <Card title="Breakfast" /*extra={<a href="#">More</a>}*/ className='custom-card'>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                      </Card>
                      <Card title="Lunch"  className='custom-card'>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                      </Card>
                      <Card title="Dinner"  className='custom-card'>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                      </Card>
   
                    </div>
                  </Col>
                  <Col className="gutter-row" span={10}>
                    <div>
                      <Title level={2} >Next Meal</Title>
                      <Card title="Breakfast" className='custom-card'>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                      </Card>
                      <div className='mealinfo-box'>
                        <Card title="Meal Info" className='custom-card'>
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
