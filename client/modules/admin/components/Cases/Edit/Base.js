import { Form, Input, Button, Checkbox, Radio, Tooltip, Icon, Upload } from 'antd';
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
			tags: _.map(props.data.tags, item => item.id.toString()),
			thumb: props.data.thumb,
			images: props.data.images
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
		data.thumb = this.state.thumb;
		data.images = this.state.images;
    this.props.casesAct.updateOrCreate(data)
  }
  tagChange(selected){
  	this.setState({
  		tags: selected
  	})
  }

  generateUploadData(files = []){
  	if(!Array.isArray(files)) files = [files];

  	return _.compact(files).map(item => {
  		if(typeof item === 'object'){
  			return item;
  		}else{
	  		return {
		  		uid: uuid(),
		  		name: '',
		  		status: item ? 'done' : 'uploading',
		  		url: item,
		  		thumbUrl: item,	
	  		}
  		}
  	})
  }

  fileChange(name, info, e){
  	let {file, fileList} = info;
  	if(!file.response){
  		this.setState({
  			[name]: fileList
  		})
  	}else{
	  	if(name === 'thumb'){
  			const thumb = file.response.path[0].dist
  			this.setState({
  				thumb: thumb
  			})
	  	} else if(name === 'images'){
  			let {images} = this.state
  			images.push(file.response.path[0].dist)
  			images = _.filter(images, item => !item.response)
  			console.log('images:', images)
  			this.setState({
  				images: _.map(images, item => item.url)
  			})
	  	}
  	}
  }

  generateUploadOption(files, name = ''){
  	return {
  		action: config.server + '/upload',
  		listType: 'picture',
  		// supportServerRender: true,
  		fileList: this.generateUploadData(files),
  		onChange: this.fileChange.bind(this, name)
  	}
  }

	render(){
		const { getFieldProps } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 }
    };
    const {data, taglist} = this.props;

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
	        <FormItem
	          {...formItemLayout}
	          label="封面"
	        >
	          <Upload {...this.generateUploadOption(this.state.thumb, 'thumb')} accept="image/*" className="upload-list-inline">
              <Button type="ghost">
                <Icon type="upload" /> 点击上传
              </Button>
            </Upload>
	        </FormItem>
	        <FormItem
	          {...formItemLayout}
	          label="图片展示"
	        >
	          <Upload {...this.generateUploadOption(this.state.images, 'images')} multiple accept="image/*" className="upload-list-inline">
              <Button type="ghost">
                <Icon type="upload" /> 点击上传
              </Button>
            </Upload>
	        </FormItem>
	        <FormItem
	          {...formItemLayout}
	          label="内容"
	        >
	          <Input type="textarea" rows="10" placeholder="" {...getFieldProps('content', { initialValue: data.content||'' })} />
	        </FormItem>
	        <FormItem wrapperCol={{ span: 16, offset: 6 }} style={{ marginTop: 24 }}>
	          <Button type="primary" htmlType="submit">确定</Button>
	        </FormItem>
	      </Form>
			</div>
		)
	}
}

