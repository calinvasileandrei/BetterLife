import { Row, Col, Form, Input, Button, Divider, Typography } from 'antd'
import React, { useCallback, useContext } from 'react'
import {
  LockOutlined,
  FormOutlined,
  GoogleOutlined,
  FacebookFilled,
  TwitterOutlined,
  AppleFilled,
} from '@ant-design/icons'
import PersonalGoalImg from './assets/personalGoal.svg'
import app from '../../firebase/FirebaseContext'
import { Redirect, withRouter } from 'react-router'
import { AuthContext } from '../../firebase/Auth'
import '../../style/global.css'

const { Title } = Typography

const SignupPage = ({ history }: any) => {
  const handleSignup = useCallback(
    async (event: any) => {
      console.log(event)
      if (event.password === event.reapeatpassword) {
        try {
          await app
            .auth()
            .createUserWithEmailAndPassword(event.email, event.password)
          history.push('/userhome')
        } catch (error: any) {
          alert(error)
        }
      } else {
        alert('The password are different!')
      }
    },
    [history]
  )

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  const { currentUser } = useContext(AuthContext)

  if (currentUser) {
    return <Redirect to='/userhome' />
  }

  return (
    <div>
      <Row>
        <Col span={14} style={{ background: '#002766', height: '100vh' }}></Col>
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
              <Form.Item
                name='reapeatpassword'
                rules={[
                  {
                    required: true,
                    message: 'Please input your password again!',
                  },
                ]}
              >
                <Input.Password placeholder='Repeat your password' />
              </Form.Item>
              <Form.Item>
                <div className='centerElementH'>
                  <Button
                    type='primary'
                    htmlType='submit'
                    style={{ width: '40%', borderRadius: 12 }}
                  >
                    Sign-up now
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
              <a onClick={() => history.push('/signin')}>
                Already registered? Sign in now!
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default withRouter(SignupPage)
