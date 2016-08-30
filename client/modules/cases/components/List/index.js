import Filter from '../Filter';
import style from './style.scss';

import List from './List';

import {getList} from 'cases/actions/list';

@connect(
	state => ({
		list: state.cases.list.values
	}),
	dispatch => bindActionGroups({getList}, dispatch)
)
export default class ListContainer extends React.Component{
	constructor(props){
		super();
		props.getList();
	}
	render(){
		return (
			<div className={style.listContainer}>
				<Filter></Filter>
				<List list={this.props.list}></List>
			</div>
		)
	}
}