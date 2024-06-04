export default function Login() {
    return <div>
        <h1>登录账号</h1>
        <ul>
            <li>
                <span>邮箱：</span>
                <input type="email" name="email" />
            </li>
            <li>
                <span>密码：</span>
                <input type="password" name="password" />
            </li>
            <li>
            <button>登录</button>
            </li>
        </ul>
    </div>
}