export default function User() {
    return <div>
        <h1>
            <img src="/example-photo.avif" alt="photo" width={48} height={48} />
            <span>Steven</span>
            <button>修改</button>
        </h1>
        <details>
            <summary>修改头像</summary>
            <input type="file" /><br />
            <button>应用新头像</button>
        </details>
        <hr />
        <div>发帖列表: </div>
        <ul>
            <li>
                <a href="/p/123">我的第一个帖子</a>
                <span> 18分钟前 </span>
            </li>
        </ul>
    </div>
}