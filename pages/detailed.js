import React, {useState} from 'react'
import Head from 'next/head'
import Header from "../components/Header";
import {Row, Col, Breadcrumb, Affix} from 'antd'
import {CalendarOutlined, BranchesOutlined, TeamOutlined} from '@ant-design/icons'
import Author from "../components/Author";
import Advert from "../components/Advert";
import Footer from "../components/Footer";
import '../styles/pages/detailed.css'
import ReactMarkdown from 'react-markdown'
import MarkNav from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';
import axios from "axios";

import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'

import Tocify from '../components/tocify.tsx'
import  servicePath  from '../config/apiUrl'

const Detailed = (props) => {

    const tocify = new Tocify()
    const renderer = new marked.Renderer()

    renderer.heading = function(text, level, raw) {
        const anchor = tocify.add(text, level);
        return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
    };

    marked.setOptions({
        // 渲染方式
        renderer,
        // 渲染方式和github一样
        gfm: true,
        // true完全不容错
        pedantic: false,
        // 不忽略html
        sanitize: false,
        // github表格样式
        table: true,
        // 是否支持github 换行符号
        breaks: false,
        smartLists: true,
        highlight:function (code){
            return hljs.highlightAuto(code).value
        }
    })

    let html = marked(props.article_content)
    // console.log(props)

    return (
        <>
            <Head>
                <title>详情页</title>
            </Head>
            <Header/>
            <Row className="comm-main" type="flex" justify="center">
                <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
                    <div>
                        <div className="bread-div">
                            <Breadcrumb>
                                <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                                <Breadcrumb.Item><a href="/list">列表</a></Breadcrumb.Item>
                                <Breadcrumb.Item>{props.title}</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>

                        <div>
                            <div className="detailed-title">
                                {props.title}
                            </div>

                            <div className="list-icon center">
                                <span><CalendarOutlined/> {props.addTime}</span>
                                <span><BranchesOutlined/> {props.typeName}</span>
                                <span><TeamOutlined/> {props.view_count}人</span>
                            </div>

                            <div className="detailed-content"
                                 dangerouslySetInnerHTML={{__html:html}}
                            >
                            </div>



                        </div>

                    </div>
                </Col>

                <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
                    <Author/>
                    <Advert/>
                    <Affix offsetTop={5}>
                        <div className="detailed-nav comm-box">
                            <div className="nav-title">文章目录</div>
                            <div className="toc-list">
                                {tocify && tocify.render()}
                            </div>
                        </div>
                    </Affix>
                </Col>
            </Row>
            <Footer/>
        </>
    )
}

Detailed.getInitialProps = async(context)=>{

    console.log(context.query.id)
    let id =context.query.id
    const promise = new Promise((resolve)=>{

        axios(servicePath.getArticleById+id).then(
            (res)=>{
                // console.log(title)
                resolve(res.data.data[0])
            }
        )
    })

    return await promise
}

export default Detailed
