export default function Inbox(){
    return <div>
        <h1>我的消息</h1>
        <ul>
            <li>
                <span>18分钟前 </span>
                <a href="/u/123">Steven</a>
                <span> 评论了你的帖子 </span>
                <a href="/p/1">我的第一个帖子</a>
                <span> : </span>
                <span>测试一下评论</span>
            </li>
            <li>
                <span>20分钟前</span>
                <a href="/u/123">Steven</a>
                <span> 回复了你的评论 </span>
                <a href="/p/123">我的评论</a>
                <span> : </span>
                <span>测试一下回复</span>
            </li>
        </ul>
    </div>
}