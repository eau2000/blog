import {Avatar, Divider} from 'antd'
import {QqOutlined,WechatOutlined,GithubOutlined} from '@ant-design/icons';
import '../styles/components/author.css'

const Author = () => {
    return (
        <div className="author-div comm-box">
            <div><Avatar size={100} src="https://tva1.sinaimg.cn/large/008eGmZEgy1gmvav45u3uj30u0140x6r.jpg"/></div>
            <div className="author-introduction">
                萌新前端程序员。各位多多指教
                <Divider>社交账号</Divider>
                <Avatar size={28} icon={<GithubOutlined />} className="account"/>
                <Avatar size={28} icon={<QqOutlined />} className="account"/>
                <Avatar size={28} icon={<WechatOutlined />} className="account"/>
            </div>
        </div>
    )
}

export default Author
