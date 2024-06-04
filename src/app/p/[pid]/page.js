export default function Post() {
    return <div>
        <h1>我的第一个帖子</h1>
        <span> by </span>
        <a href="/u/123"><img src="/example-photo.avif" alt="avatar" width={24} height={24} /> Steven</a>
        <span> 13分钟前 </span>
        <hr />
        <div>
            评论列表：
        </div>
        <ul>
            <li>
                <a href="/u/123"><img src="/example-photo.avif" alt="avatar" width={24} height={24} /> Steven</a>
                <small style={{color:'grey'}}> 18分钟前 </small>
                <span> : </span>
                <span>测试第一条评论</span>
                <button>回复</button>
            </li>
            <li>
                <a href="/u/123"><img src="/example-photo.avif" alt="avatar" width={24} height={24} /> Steven</a>
                <small style={{color:'grey'}}> 18分钟前 </small>
                <span> 回复了 </span>
                <a href="/u/123"><img src="/example-photo.avif" alt="avatar" width={24} height={24} /> Steven</a>
                <span> : </span>
                <span>测试第一条评论</span>
                <button>回复</button>
            </li>
        </ul>
    </div>
}