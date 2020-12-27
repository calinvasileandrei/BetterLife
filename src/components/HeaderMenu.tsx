import React from 'react'
import { Menu,Input } from 'antd';
import {
  UserOutlined,
  FileSearchOutlined,
  NotificationOutlined
} from '@ant-design/icons';
const Search = Input.Search;
const centerElement ={height:64,display: 'flex',alignItems: 'center'}



export const HeaderMenu = () => {
    return (
        <Menu theme="dark" mode="horizontal" style={{float: 'right'}}  selectable={false}>
          <Menu.Item   key="1">
            <div style={centerElement}>
              <Search
              prefix={<FileSearchOutlined />}
              placeholder="Search something"
              style={{borderRadius: '25px', width: '30vw'  }}
              onSearch={value => console.log(value)}
              />
            </div>
            
          </Menu.Item>
          <Menu.Item key="2"><NotificationOutlined /></Menu.Item>
          <Menu.Item key="3"><UserOutlined/></Menu.Item>
        </Menu>
    )
}
