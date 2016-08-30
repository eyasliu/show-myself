import { Row, Col } from 'antd';
import List from './List';
import Edit from './Edit';

import * as actions from 'admin/actions/tags';

@connect(
	state => ({
		tags: state.admin.tags
	}),
	dispatch => bindActionGroups({act: actions}, dispatch)
)
export default class Tags extends Component {
	constructor(props){
		super();
		this.state = {
			editItem: {}
		}
		props.act.getList();
	}
	setEdit(data){
		this.setState({
			editItem: data
		})
	}
	render(){
		return (
			<div>
				<Row gutter={12}>
					<Col span={15}>
						<List list={this.props.tags} setEdit={::this.setEdit}></List>
					</Col>
					<Col span={9}>
						<Edit data={this.state.editItem}></Edit>
					</Col>
				</Row>
			</div>
		)
	}
}