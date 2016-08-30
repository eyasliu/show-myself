import style from './style.scss';

export default class Filter extends React.Component{
	render(){
		return (
			<div className={style.filter}>
				<div className={style.inner}>
					<div className={style.title}>
						前端应用 作品
					</div>
					<ul className={style.view}>
						<li>list</li>
						<li>mobile</li>
					</ul>
				</div>
			</div>
		)
	}
}