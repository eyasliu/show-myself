import { Table, Icon } from 'antd';
import Filter from './Filter';
import {getList, remove} from 'admin/actions/cases';

@connect(
  state => ({list:state.admin.cases.list}),
  dispatch => bindActionGroups({act: {getList, remove}}, dispatch)
)
export default class List extends Component{
	constructor(props){
		super();
    console.log(props)
    props.act.getList(0);
	}

  columns = [{
    title: 'ID',
    dataIndex: 'id',
    key: 'id'
  }, {
    title: '标题',
    dataIndex: 'title',
    key: 'title',
    render: (text, record) => <Link to={"/admin/cases/edit/" + record.id}>{text}</Link>
  }, {
    title: '内容',
    dataIndex: 'content',
    key: 'content',
    render: (text, record) => <span>...</span>
  }, {
    title: '更新时间',
    dataIndex: 'updatedAt',
    key: 'updatedAt'
  }, {
    title: '操作',
    key: 'operation',
    render: (text, record) => (
      <span>
        <Link to={"/cases/" + record.id}> 查看 </Link>
        <span className="ant-divider"></span>
        <Link to={"/admin/cases/edit/" + record.id}>编辑</Link>
        <span className="ant-divider"></span>
        <a href="#" onClick={e => {
          this.props.act.remove(record.id)
          e.preventDefault();
        }}> 删除 </a>
      </span>
    ),
  }]

	render(){
    const pagination = {
      total: 100,
      showSizeChanger: true,
      onShowSizeChange: (paged, limit) => {
        this.props.act.getList(paged - 1, limit);
        console.log('Current: ', paged, '; PageSize: ', limit);
      },
      onChange: (paged, limit) => {
        this.props.act.getList(paged, limit);
        console.log('Current: ', paged, limit);
      },
    };
		return (
			<div>
				<Filter></Filter>
				<Table columns={this.columns} dataSource={this.props.list} pagination={pagination}/>
			</div>
		)
	}
}