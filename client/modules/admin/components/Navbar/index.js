import { Menu, Icon } from 'antd';
import style from './style.scss'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const Item = Menu.Item

export default class Navbar extends Component{
	constructor(){
		super();
		this.state = {
			current: 'mail'
		}
	}
	handleClick(e) {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
  	<div className={style.navbar}>
  		<a href="" className={style.logo}>Eyas Admin</a>
      <Menu onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
        style={{float: 'right'}}
      >
        <Item key="mail">
          <Icon type="mail" />文档
        </Item>
        <Item key="app" disabled>
          <Icon type="appstore" />导航二
        </Item>
        <SubMenu title={<span><Icon type="setting" />导航 - 子菜单</span>}>
          <MenuItemGroup title="分组1">
            <Item key="setting:1">选项1</Item>
            <Item key="setting:2">选项2</Item>
          </MenuItemGroup>
          <MenuItemGroup title="分组2">
            <Item key="setting:3">选项3</Item>
            <Item key="setting:4">选项4</Item>
          </MenuItemGroup>
        </SubMenu>
        <Item key="alipay">
          <a href="http://www.alipay.com/" target="_blank">导航四 - 链接</a>
        </Item>
      </Menu>
    </div>
    );
  }
}
