import React from 'react'
import '../styles/components/header.css'

import {Row,Col, Menu} from 'antd'
import {HomeOutlined,VideoCameraOutlined,DingdingOutlined} from '@ant-design/icons'
const Header = () => (
    <div className="header">
        <Row type="flex" justify="center">
            <Col   xs={24} sm={24} md={10} lg={15} xl={12}>
                <span className="header-logo">彭善怡</span>
                <span className="header-txt">前端练习生。。。</span>
            </Col>

            <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
                <Menu  mode="horizontal">
                    <Menu.Item key="home" icon={<HomeOutlined />}>
                        首页
                    </Menu.Item>
                    <Menu.Item key="video" icon={<VideoCameraOutlined />}>
                        视频
                    </Menu.Item>
                    <Menu.Item key="life" icon={<DingdingOutlined />}>
                        生活
                    </Menu.Item>
                </Menu>
            </Col>
        </Row>
    </div>
)

export default Header
