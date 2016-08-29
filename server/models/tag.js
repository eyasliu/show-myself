import S from 'sequelize';
import getList from '../services/getList';

const tag = Model.define('tag', {
	name: {
		type: S.STRING,
		allowNull: false
	}
}, {
	timestamps: false
})


tag.sync({
	// force: true
})

// some mock data
// if(process.env.NODE_ENV === 'development'){
// 	const Mock = require('mockjs');
// 	const mockUsers = Mock.mock({
// 		'users|10-20': [{
// 			name: '@word',
// 		}]
// 	})
// 	tag.bulkCreate(mockUsers.users).catch(err => {
// 		console.log(err);
// 	})
// 	console.log('create mock users success \n', mockUsers.users )
// }

export default tag;