import {Tag} from 'antd';
import style from './style.scss';
import {destory} from 'admin/actions/tags';

@connect(
	null,
	dispatch => bindActionGroups({act: {destory}}, dispatch)
)
export default class List extends Component {
	constructor(props){
		super();
	}
	onClose(item){
		this.props.act.destory(item.id);
	}
	onClick(item){
		this.props.setEdit(item)
	}
	render(){
		const {list} = this.props;
		return (
			<div className={style.list}>
			{
				list.length ? _.map(list, item => (
					<Tag key={item.id} closable onClose={this.onClose.bind(this, item)}>
						<span 
							title="点击编辑" 
							onClick={this.onClick.bind(this, item)} 
						>{item.name}</span></Tag>
				)) : (
					<p>暂无标签</p>
				)
			}
			</div>
		)
	}
}