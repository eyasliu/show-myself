import { Form, Input, Button } from 'antd';

const FormItem = Form.Item;



class Filter extends Component{
	constructor(props){
		super();
	}
	handleSubmit(e) {
	    e.preventDefault();
	    console.log('收到表单值：', this.props.form.getFieldsValue());
	  }
	render(){
		const { getFieldProps } = this.props.form;
		return (
			<div>
				<Form inline onSubmit={this.handleSubmit}>
	        <FormItem
	          label="账户"
	        >
	          <Input placeholder="请输入账户名"
	            {...getFieldProps('userName')}
	          />
	        </FormItem>
	        <FormItem
	          label="密码"
	        >
	          <Input type="password" placeholder="请输入密码"
	            {...getFieldProps('password')}
	          />
	        </FormItem>
	        <Button type="primary" htmlType="submit">登录</Button>
	      </Form>
			</div>
		)
	}
}

export default Form.create()(Filter);