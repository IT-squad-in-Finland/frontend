
export default function Home() {
  return <div>
    <h1>最新发帖</h1>
    <ul>
      <li>
        <a href="/p/1">第一条帖子</a>
        <span> by </span>

          <a href="/u/123"><img src="/example-photo.avif" alt="avatar" width={24} height={24} /> Steven</a>
        <span> 18分钟前</span>
      </li>
    </ul>
  </div>;
}
