

export default class Top extends React.Component{
	render(){
		return (
			<div id="header">
				<nav className="main">
				    <div className="logo">
				        <strong><a href="/" title="Best websites around the World">Eyas</a></strong>
				    </div>
				    <ul className="menu right">
				        <li><Link to="/">首页</Link></li>
				        <li className="active"><Link to="/">项目</Link></li>
				        <li><Link to="/">作品</Link></li>
				        <li><Link to="/">博客</Link></li>
				        <li><Link to="/">关于</Link></li>
				        <li><Link to="/">展示</Link></li>
				        <li className="submit">
				            <Link to="/">提交</Link>
				        </li>
				        <li className="search">
				            <span className="bt-search">搜索</span>
				        </li>
				    </ul>
				</nav>
			</div>
		)
	}
}