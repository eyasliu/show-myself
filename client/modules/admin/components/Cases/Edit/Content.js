import { Form, Input, Button, Checkbox, Radio, Tooltip, Icon } from 'antd';
import Select from 'antd/lib/select'

import {updateOrCreate} from 'admin/actions/posts';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;


@Form.create()
@connect(
  state => ({
    data: {}
  }),
  dispatch => bindActionGroups({
    postAct: {updateOrCreate}
  }, dispatch)
)
class PostForm extends Component{
	constructor(){
		super()
		this.state = {
			tags: [],
      content: ''
		}
	}

	handleSubmit(e) {
    e.preventDefault();
		var data = this.props.form.getFieldsValue()
		if(this.props.data.id){
			data.id = this.props.data.id
		}
		data.tags = this.state.tags;
    data.content = this.state.content;
    // test data
    data.author = 1
    data.post = 1


    this.props.postAct.updateOrCreate(data)
  }
  tagChange(selected){
  	this.setState({
  		tags: selected
  	})
  }

	render(){
		const { getFieldProps } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 }
    };
    const data = {}
    const taglist = []
		return (
			<Form horizontal onSubmit={::this.handleSubmit}>
        <FormItem
          {...formItemLayout}
          label="标题"
        >
          <Input type="text" placeholder="" {...getFieldProps('title', { initialValue: data.name||'' })} />
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
        <FormItem
          {...formItemLayout}
          label="内容"
        >
          <Input type="text" placeholder="" {...getFieldProps('content', { initialValue: data.content||'' })} />
        </FormItem>
        <FormItem wrapperCol={{ span: 16, offset: 6 }} style={{ marginTop: 24 }}>
          <Button type="primary" htmlType="submit">确定</Button>
        </FormItem>
      </Form>
		)
	}
}

export default class Content extends Component{
	constructor(props){
		super();
	}
	render(){
		return (
			<div>
        <PostForm></PostForm>
			</div>
		)
	}
}