import React from 'react'
import { Card, Form, Input, Button, DatePicker, InputNumber, Radio } from 'antd'

export const UserInfoCardSecond = ({ mystyle }: any) => {
  const onChange = (value: any) => {}

  return (
    <Card
      title='Now I need to know something more 🙄 '
      className='custom-card'
      style={{ width: 400, ...mystyle }}
      loading={false}
    >
      <Form layout='vertical'>
        <Form.Item
          label='Height'
          name='height'
          rules={[{ required: true, message: 'Please input your height!' }]}
        >
          <InputNumber
            min={30}
            max={300}
            defaultValue={175}
            onChange={onChange}
          />
        </Form.Item>
        <Form.Item
          label='Weight'
          name='weight'
          rules={[{ required: true, message: 'Please input your weight!' }]}
        >
          <InputNumber
            min={20}
            max={1000}
            defaultValue={70}
            onChange={onChange}
          />
        </Form.Item>
        <Form.Item
          label='Your Ideal Weight'
          name='idealweight'
          rules={[
            { required: true, message: 'Please input your ideal weight!' },
          ]}
        >
          <InputNumber
            min={20}
            max={1000}
            defaultValue={70}
            onChange={onChange}
          />
        </Form.Item>
        <Form.Item label='Pick your pace' name='pace'>
          <Radio.Group defaultValue='moderate' buttonStyle='solid'>
            <Radio.Button value='slow'>Slow</Radio.Button>
            <Radio.Button value='moderate'>Moderate</Radio.Button>
            <Radio.Button value='fast'>Fast</Radio.Button>
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
