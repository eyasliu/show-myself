import { Form, Input, Button, Checkbox, Radio, Tooltip, Icon, Tabs, Spin } from 'antd';
import Base from './Base';
import Content from './Content'

import {getView, resetView} from 'admin/actions/cases'

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const RadioGroup = Radio.Group;

@connect(
	state => ({view: state.admin.cases.view}),
	dispatch => bindActionGroups({act: {
		getView, resetView
	}}, dispatch)
)
export default class Add extends Component{
	constructor(props){
		super();
		if(props.params.id){
			props.act.getView(props.params.id)
		}else{
			props.act.resetView();
		}
		this.state = {
			isNew: !props.params.id
		}
	}

	callback(key) {
	  // console.log(key);
	}

	render(){
		const {view: data} = this.props;
		const {isNew} = this.state;

		return (
			<div>
				<Tabs defaultActiveKey="1" onChange={this.callback}>
			    <TabPane tab="基本信息" key="1">
			    	<Spin tip="正在加载数据..." spinning={!isNew && !data.id}>
			    		{!isNew && !data.id ? '' : <Base data={this.props.view || {}} isNew={isNew}></Base>}
			    	</Spin>
			    </TabPane>
			  </Tabs>
			</div>
		)
	}
}
