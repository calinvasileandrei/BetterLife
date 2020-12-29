import React from 'react'
import { Card, Form, Input, Button, DatePicker } from 'antd'

export const UserInfoCardFirst = ({ mystyle }: any) => {
  return (
    <Card
      title='Let me know something about you '
      className='custom-card'
      style={{ width: 400, ...mystyle }}
    >
      <Form layout='vertical'>
        <Form.Item
          label='Age'
          name='age'
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input placeholder='Write you name' />
        </Form.Item>
        <Form.Item
          label='Surname'
          name='surname'
          rules={[{ required: true, message: 'Please input your surname!' }]}
        >
          <Input placeholder='Write your surname' />
        </Form.Item>
        <Form.Item
          label='DatePicker'
          name='date'
          rules={[{ required: true, message: 'Please input your date!' }]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item>
          <div className='centerElementH'>
            <Button
              type='primary'
              htmlType='submit'
              style={{ width: '40%', borderRadius: 12 }}
            >
              Next
            </Button>
          </div>
        </Form.Item>
      </Form>
    </Card>
  )
}
