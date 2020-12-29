import React from 'react'
import { Card, Form, Input, Button, DatePicker, Radio, Skeleton } from 'antd'
const { Meta } = Card
export const UserInfoCardThird = ({ mystyle }: any) => {
  return (
    <Card
      title='Final Step!'
      className='custom-card'
      style={{ width: 500, ...mystyle }}
      loading={false}
    >
      <Form layout='vertical'>
        <Form.Item
          label='Food Preference'
          name='foodpreference'
          rules={[
            { required: true, message: 'Please input your food preferences!' },
          ]}
        >
          <Radio.Group defaultValue='nopreference' buttonStyle='solid'>
            <Radio.Button value='nopreference'>No Preference</Radio.Button>
            <Radio.Button value='vegetarian'>Vegetarian</Radio.Button>
            <Radio.Button value='vegan'>Vegan</Radio.Button>
            <Radio.Button value='pescetarian'>Pescetarian</Radio.Button>
          </Radio.Group>
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
