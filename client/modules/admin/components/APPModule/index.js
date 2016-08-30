// import "antd/dist/antd.css";
import "./admin.global";

import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import style from './style.scss';
import { Breadcrumb } from 'antd';

export default class APPModule extends React.Component{
	constructor(props){
		super()
		require('antd/dist/antd.css')
	}

	render(){
		return (
			<div>
				<Navbar />
				<Sidebar />
				<div className={style.content}>
					<div className={style.breadcrumb}>
						<Breadcrumb separator=">">
					    <Breadcrumb.Item>Home</Breadcrumb.Item>
					    <Breadcrumb.Item><a href="">Application Center</a></Breadcrumb.Item>
					    <Breadcrumb.Item><a href="">Application List</a></Breadcrumb.Item>
					    <Breadcrumb.Item>An Application</Breadcrumb.Item>
					  </Breadcrumb>
					</div>
					<div className={style.main}>
						{this.props.children}
					</div>
				</div>
			</div>
		)
	}
}