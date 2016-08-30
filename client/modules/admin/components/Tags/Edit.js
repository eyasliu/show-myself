import { Form, Input, Button, Checkbox, Radio, Tooltip, Icon } from 'antd';
import * as actions from 'admin/actions/tags';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

@connect(
	null,
	dispatch => bindActionGroups({act: actions}, dispatch)
)
class Edit extends Component {
	constructor(props){
		super();
	}

	handleSubmit(e) {
    e.preventDefault();
    const formdata = this.props.form.getFieldsValue()
    formdata.id = this.props.data.id
    this.props.act.updateOrCreate(formdata);
  }

	render(){
		const { getFieldProps } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    const {data} = this.props;
		return (
			<div>
				<Form horizontal onSubmit={::this.handleSubmit}>
	        <FormItem
	          {...formItemLayout}
	          label="名字"
	        >
	          <Input type="text" {...getFieldProps('name', { initialValue: data.name })} placeholder="请输入密码" />
	        </FormItem>
	        <FormItem wrapperCol={{ span: 16, offset: 6 }} style={{ marginTop: 24 }}>
	          <Button type="primary" htmlType="submit">确定</Button>
	        </FormItem>
	      </Form>
			</div>
		)
	}
}
export default Form.create()(Edit)