import { Row, Col, Form, Input, Button, Divider, Typography } from 'antd'
import React, { useCallback } from 'react'
import {
  LockOutlined,
  FormOutlined,
  GoogleOutlined,
  FacebookFilled,
  TwitterOutlined,
  AppleFilled,
} from '@ant-design/icons'
import app from '../../firebase/FirebaseContext'
import { withRouter } from 'react-router'
import '../../style/global.css'

const { Title } = Typography

const SigninPage = ({ history }: any) => {
  const centerElement = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
  const handleSignup = useCallback(
    async (event: any) => {
      try {
        await app.auth().signInWithEmailAndPassword(event.email, event.password)
        history.push('/userhome')
      } catch (error: any) {
        alert(error)
      }
    },
    [history]
  )

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div>
      <Row>
        <Col
          span={14}
          className='fullHeightVh'
          style={{ background: '#002766' }}
        ></Col>
        <Col span={10} className='spaceAroundElementV'>
          <div>
            <Title>BetterLife</Title>
          </div>
          <div style={{ width: '80%' }}>
            <Form
              layout='vertical'
              onFinish={handleSignup}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label='Email'
                name='email'
                rules={[
                  { required: true, message: 'Please input your email!' },
                ]}
                tooltip={{
                  title: 'This is a required field',
                  icon: <FormOutlined />,
                }}
              >
                <Input placeholder='Write you email' />
              </Form.Item>
              <Form.Item
                label='Password'
                name='password'
                rules={[
                  { required: true, message: 'Please input your password!' },
                ]}
                tooltip={{
                  title: 'Tooltip with customize icon',
                  icon: <LockOutlined />,
                }}
              >
                <Input.Password placeholder='Write your password' />
              </Form.Item>
              <Form.Item>
                <div className='centerElementH'>
                  <Button
                    type='primary'
                    htmlType='submit'
                    style={{ width: '40%', borderRadius: 12 }}
                  >
                    Sign-in now
                  </Button>
                </div>
              </Form.Item>
            </Form>
            <Divider>Try also</Divider>
            <div>
              <Row justify='space-around'>
                <a>
                  {' '}
                  <GoogleOutlined
                    style={{ fontSize: '42px', color: 'red' }}
                  />{' '}
                </a>
                <a>
                  {' '}
                  <FacebookFilled style={{ fontSize: '42px' }} />{' '}
                </a>
                <a>
                  {' '}
                  <AppleFilled
                    style={{ fontSize: '42px', color: 'black' }}
                  />{' '}
                </a>
                <a>
                  {' '}
                  <TwitterOutlined style={{ fontSize: '42px' }} />{' '}
                </a>
              </Row>
            </div>
            <div className='centerElementH' style={{ margin: 10 }}>
              <a onClick={() => history.push('/signup')}>
                New user? Sign up now !
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}
export default withRouter(SigninPage)
