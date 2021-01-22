import React,{useState,useEffect} from 'react'
import '../styles/components/header.css'
import Router from "next/router";
import Link from "next/link";
import axios from "axios";
import servicePath from "../config/apiUrl";

import {Row,Col, Menu} from 'antd'
import {HomeOutlined,VideoCameraOutlined,DingdingOutlined} from '@ant-design/icons'
const Header = () => {
    const [navArray , setNavArray] = useState([])
    useEffect(()=>{
        const fetchData = async ()=>{
            const result= await axios(servicePath.getTypeInfo).then(
                (res)=>{
                    // setNavArray(res.data.data)
                    // console.log(res.data.data)
                    return res.data.data
                }
            )
            // console.log(result)
            setNavArray(result)
        }
        fetchData()
        // console.log(navArray)


    },[])
    const handleClick = (e)=>{
        if(e.key==0){
            Router.push('/')
        }else{
            Router.push('/list?id='+e.key)
        }
    }
    return (
        <div className="header">
            <Row type="flex" justify="center">
                <Col   xs={24} sm={24} md={10} lg={15} xl={12}>
                    <span className="header-logo">彭善怡</span>
                    <span className="header-txt">前端练习生。。。</span>
                </Col>

                <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
                    <Menu  mode="horizontal" onClick={handleClick}>
                        <Menu.Item key="0" icon={<HomeOutlined />}>
                            首页
                        </Menu.Item>
                        {
                            navArray.map((item)=>{
                                return(
                                    <Menu.Item key={item.id} icon={<VideoCameraOutlined/>}>
                                        {item.typeName}
                                    </Menu.Item>
                                )
                            })
                        }
                    </Menu>
                </Col>
            </Row>
        </div>
    )
}

export default Header
