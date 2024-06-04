import "./globals.css";


export const metadata = {
  title: "论坛",
  description: "我们自己的论坛",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <nav>
          <a href="/">论坛首页</a>
          <span> | </span>
          <a href="/register">注册</a>
          <span> | </span>
          <a href="/login">登录</a>
          <span> | </span>
          <a href="/inbox">消息(1)</a>
          <span> | </span>
          <a href="/u/123"><img src="/example-photo.avif" alt="avatar" width={24} height={24} /> Steven</a>
          <button>退出账号</button>
        </nav>
        <hr />
        {children}
      </body>
    </html>
  );
}
