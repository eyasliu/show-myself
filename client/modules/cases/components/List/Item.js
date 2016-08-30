import style  from './style.scss';

export default class Item extends React.Component{
	render(){
		const {data} = this.props;
		return (
			<div className={style.item}>
				<div className={style.inner}>
					<figure className={style.thumb}><Link to="/"><img width="700" height="500" src={data.thumb} alt={data.title}/></Link></figure>
					<div className={style.title}>
						<h1>{data.title}</h1>
						<p>{data.content}</p>
					</div>
				</div>
			</div>
		)
	}
}