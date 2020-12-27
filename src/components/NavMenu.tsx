import React from 'react'
import { Menu } from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  CalendarOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';


export const  NavMenu:React.FC = () => {
   
    return (
      <Menu  theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<HomeOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="2" icon={<ShoppingCartOutlined />}>
          Food Selection
        </Menu.Item>
        <Menu.Item key="3" icon={<CalendarOutlined />}>
          Your Diet
        </Menu.Item>
        <Menu.Item key="4" icon={<UserOutlined />}>
          Personal Trainer
        </Menu.Item>
      </Menu>
    )
}
