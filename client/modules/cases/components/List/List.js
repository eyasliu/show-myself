import Item from './Item';
import style from './style.scss';

export default class ListItems extends React.Component{
	render(){
		return (
			<div className={style.list}>
				{this.props.list.map(item => <Item key={item.id} data={item} />)}
			</div>
		)
	}
}