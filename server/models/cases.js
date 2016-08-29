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
		type: S.TEXT // json string
	},
	content: {
		type: S.TEXT
	},
	url: {
		type: S.STRING
	}
}, {
	classMethods: {
		findList: getList
	},
	instanceMethods: {
		// findList: getList
	}
})


cases.sync({
	// force: true
})

// some mock data
// if(process.env.NODE_ENV === 'development'){
// 	const Mock = require('mockjs');
// 	const mockUsers = Mock.mock({
// 		'users|10-20': [{
// 			title: '@word',
// 			thumb: '@image',
// 			images: JSON.stringify([Mock.mock('@images'), Mock.mock('@images'), Mock.mock('@images'), Mock.mock('@images')]),
// 			content: '@cparagraph',
// 			url: '@url(http)'
// 		}]
// 	})
// 	cases.bulkCreate(mockUsers.users).catch(err => {
// 		console.log(err);
// 	})
// 	console.log('create mock users success \n', mockUsers.users )
// }

export default cases;