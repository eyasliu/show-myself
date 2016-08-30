import Filter from '../Filter';
import style from './style.scss';

import List from './List';

export default class ListContainer extends React.Component{
	render(){
		return (
			<div className={style.listContainer}>
				<Filter></Filter>
				<List></List>
			</div>
		)
	}
}