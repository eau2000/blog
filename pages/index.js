import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import {Button} from 'antd'
import Header from "../components/Header";

const Home = () => (
    <div>
        <Head>
            <title>Home</title>
        </Head>
        <Header/>
        <div><Button>我是按钮</Button></div>
    </div>
)

export default Home
