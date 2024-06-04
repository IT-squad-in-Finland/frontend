export default function Register() {
    return <div>
        <h1>注册账号</h1>
        <ul>
            <li>
                <span>邮箱：</span>
                <input type="email" name="email" />
            </li>
            <li>
                <span>用户名：</span>
                <input type="text" name="username" />
            </li>
            <li>
                <span>密码：</span>
                <input type="password" name="password" />
            </li>
            <li>
                <button>注册账号</button>
            </li>
        </ul>
    </div>
}