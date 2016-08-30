import { Form, Input, Button, Checkbox, Radio, Tooltip, Icon } from 'antd';
import Select from 'antd/lib/select'
import {getList} from 'admin/actions/tags'
import {updateOrCreate} from 'admin/actions/cases';
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;

@connect(
	state => ({
		taglist: state.admin.tags
	}),
	dispatch => bindActionGroups({
		tagAct: {getList},
		casesAct: {updateOrCreate}
	}, dispatch)
)
@Form.create()
export default class Add extends Component{
	constructor(props){
		super();
		this.state = {
			tags: _.map(props.data.tags, item => item.id.toString())
		}
		!props.taglist.length ? props.tagAct.getList() : '';
	}

	handleSubmit(e) {
    e.preventDefault();
		var data = this.props.form.getFieldsValue()
		if(this.props.data.id){
			data.id = this.props.data.id
		}
		data.tags = this.state.tags;
    this.props.casesAct.updateOrCreate(data)
  }
  tagChange(selected){
  	this.setState({
  		tags: selected
  	})
  }

  componentWillReceiveProps(nextProps){
  	this.setState({
  		tags: _(nextProps.data.tags)
			  		.map(item => item.id.toString())
			  		.concat(this.state.tags)
			  		.uniq()
			  		.value()
  	})
  }

	render(){
		const { getFieldProps } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 }
    };
    const {data, taglist} = this.props;

    console.log('hhhhhhhhhhhhh:',data.tags, this.state, taglist)
		return (
			<div>
				<Form horizontal onSubmit={::this.handleSubmit}>
	        <FormItem
	          {...formItemLayout}
	          label="名称"
	        >
	          <Input type="text" placeholder="" {...getFieldProps('title', { initialValue: data.title||'' })} />
	        </FormItem>
	        <FormItem
	          {...formItemLayout}
	          label="标签"
	        >
	        	<Select tags
	        		key={uuid()}
	        		onChange={::this.tagChange}
	        		name="tags"
	        		value={this.state.tags}
	        	>
	        		{_.map(taglist, item => (
	        			<Option 
	        				key={item.id}
	        			>
	        				{item.name}
	        			</Option>
	        		))}
	        	</Select>
	        </FormItem>
	        <FormItem wrapperCol={{ span: 16, offset: 6 }} style={{ marginTop: 24 }}>
	          <Button type="primary" htmlType="submit">确定</Button>
	        </FormItem>
	      </Form>
			</div>
		)
	}
}

