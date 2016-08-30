
import style from './style.scss';

export default class Item extends React.Component{
	constructor(props){
		super();
	}
	render(){
		const {data} = this.props;
		return (
			<div className={style.item}>
				<div className={style.inner}>
					<h1 className={style.title}>{data.title} {data.title} {data.title} {data.title} {data.title} {data.title} {data.title} {data.title} {data.title} {data.title} {data.title} {data.title} {data.title} {data.title} {data.title} {data.title} {data.title} </h1>
					<div className={style.attr}>
						<span>{data.updatedAt}</span>
						<span>Author: {data.author}</span>
					</div>
					<div className={style.thumb}>
						<img src={data.thumb} alt={data.title}/>
					</div>
					<div className={cx("content", style.content)} dangerouslySetInnerHTML={{__html:data.content}}></div>
					{data.images && data.images.length ? <div className={style.images}>
						{data.images.map(item => <img key={uuid()} src={item} alt={item}/>)}
					</div>:""}
				</div>
			</div>
		)
	}
}