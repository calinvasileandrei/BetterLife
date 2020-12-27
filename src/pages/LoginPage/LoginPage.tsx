
import { Row,Col,Form,Input,Button,Divider,Typography } from 'antd'
import React, { useState } from 'react'
import { LockOutlined,FormOutlined,GoogleOutlined,FacebookFilled,TwitterOutlined,AppleFilled } from '@ant-design/icons';
import PersonalGoalImg from './assets/personalGoal.svg'
const { Title } = Typography;
export const LoginPage = () => {
    const [form] = Form.useForm();
    const [requiredMark, setRequiredMarkType] = useState<boolean | 'optional'>('optional');

    const onRequiredTypeChange:any = ({ requiredMark}:any) => {
        setRequiredMarkType(requiredMark);
    };

    return (    
        <div>
            <Row>
                <Col span={14} style={{background:'#002766',height:'100vh'}}>

                </Col>
                <Col span={10} style={{display: 'flex',flexDirection:'column',justifyContent: 'center', alignItems: 'center', verticalAlign: 'space-around'}}>
                    <div>
                        <Title>BetterLife</Title>
                    </div>
                    <div style={{width:'80%'}} >
                        <Form
                            form={form}
                            layout="vertical"
                            initialValues={{ requiredMark }}
                            onValuesChange={onRequiredTypeChange}
                            requiredMark={requiredMark}
                            >
                            <Form.Item label="Email" required tooltip={{title:"This is a required field", icon:<FormOutlined />}}>
                                <Input placeholder="Write you email" />
                            </Form.Item>
                            <Form.Item
                                label="Password"
                                required
                                tooltip={{ title: 'Tooltip with customize icon', icon: <LockOutlined /> }}
                            >
                                <Input placeholder="Write your password" />
                            </Form.Item>
                            <Form.Item>
                                <div style={{display:'flex',justifyContent: 'center', alignItems: 'center'}}>
                                    <Button type="primary" style={{width:'40%',borderRadius:12}} >Login now</Button>
                                </div>
                            </Form.Item>
                        </Form>
                         <Divider>Try also</Divider>
                         <div>
                             <Row justify='space-around'>
                                 <a> <GoogleOutlined style={{ fontSize: '42px',color:'red' }} /> </a>
                                 <a> <FacebookFilled  style={{ fontSize: '42px' }} /> </a>
                                 <a> <AppleFilled  style={{ fontSize: '42px', color:'black' }} /> </a>
                                 <a> <TwitterOutlined  style={{ fontSize: '42px' }} /> </a>
                             </Row>
                         </div>
                    </div>
                </Col>
            </Row>
            
        </div>
    )
}
