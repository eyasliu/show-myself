import S from 'sequelize';
import getList from '../services/getList';

const cases = Model.define('cases', {
	title: {
		type: S.STRING,
		allowNull: false
	},
	thumb: {
		type: S.STRING
	},
	images: {
		type: S.TEXT, // json string
		get(){
			const str = this.getDataValue('images')
			try{
				return JSON.parse(str)
			}catch(e){
				return str;
			}
		}
	},
	content: {
		type: S.TEXT
	},
	url: {
		type: S.STRING
	},
	// author: {
	// 	type: S.STRING
	// }
}, {
	classMethods: {
		findList: getList
	},
	instanceMethods: {
		// findList: getList
	}
})

export default cases;