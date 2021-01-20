import React from 'react'
import '../styles/components/header.css'

import {Row,Col, Menu} from 'antd'
import {HomeOutlined,VideoCameraOutlined,DingdingOutlined} from '@ant-design/icons'
const Header = () => (
    <div className="header">
        <Row type="flex" justify="center">
            <Col  xs={24} sm={24} md={10} lg={10} xl={10}>
                <span className="header-logo">彭善怡</span>
                <span className="header-txt">前端练习生。。。</span>
            </Col>

            <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
                <Menu  mode="horizontal">
                    <Menu.Item key="home">
                        <HomeOutlined />
                        首页
                    </Menu.Item>
                    <Menu.Item key="video">
                        <VideoCameraOutlined />
                        视频
                    </Menu.Item>
                    <Menu.Item key="life">
                        <DingdingOutlined />
                        生活
                    </Menu.Item>
                </Menu>
            </Col>
        </Row>
    </div>
)

export default Header
