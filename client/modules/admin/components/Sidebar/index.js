import { Menu, Icon } from 'antd';
import style from './style.scss';

const SubMenu = Menu.SubMenu;
const Item = Menu.Item;

export default class Sidebar extends Component{
	constructor(){
		super();
		this.state = {
			current: '1',
      openKeys: [],
      height: document.body.clientHeight - 50
		}
  	window.addEventListener('resize', ::this.resize)
	}
	resize(){
		this.setState({
			height: document.body.clientHeight - 50
		})
	}
	handleClick(e) {
    // console.log('click ', e);
    this.setState({
      current: e.key,
      openKeys: e.keyPath.slice(1),
    });

    e.item.props.href && RouterHistory.push(e.item.props.href)
  }
  onToggle(info) {
    this.setState({
      openKeys: info.open ? info.keyPath : info.keyPath.slice(1),
    });
  }
  componentDidMount(){
  }
	render(){
		return (
	<div className={style.sidebar}>
		<div className={style.inner}>
			<Menu onClick={::this.handleClick}
        style={{ width: 240, height: this.state.height }}
        openKeys={this.state.openKeys}
        onOpen={::this.onToggle}
        onClose={::this.onToggle}
        selectedKeys={[this.state.current]}
        mode="inline"
      >
      	<Item key="dashboard" href="/admin/dashboard"><span><Icon type="tablet" /><span>首页</span></span></Item>
        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>案例</span></span>}>
          <Item key="1" href="/admin/cases">列表</Item>
          <Item key="2" href="/admin/cases/add">新建</Item>
          <Item key="3" href="/admin/cases/tags">标签管理</Item>
        </SubMenu>
      </Menu>
		</div>
	</div>
)
	}
}