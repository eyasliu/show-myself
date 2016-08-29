import S from 'sequelize';
// import seq from './index';
import Encrypt from '../services/Encrypt';

const user = Model.define('user', {
	username: {
		type: S.STRING,
		unique: true,
		allowNull: false
	},
	nickname: {
		type: S.STRING,
		allowNull: true
	},
	password: {
		type: S.STRING,
		allowNull: false,
		set(val){
			this.setDataValue('password', Encrypt.hash(val))
		}
	},
	email: {
		type: S.STRING,
		unique: true,
		allowNull: false
	},
	avatar: S.STRING,
	status: {
		type: S.ENUM,
		values: ['active', 'delete', 'disable'],
		defaultValue: 'active'
	}
}, {
	classMethods: {
		findByUsername(username){
			return this.findOne({where: {username: username}})
		}
	}
})

user.sync({
	// force: true
});

// some mock data
// if(process.env.NODE_ENV === 'development'){
// 	const Mock = require('mockjs');
// 	const mockUsers = Mock.mock({
// 		'users|10-20': [{
// 			username: '@word',
// 			nickname: '@name',
// 			password: 'passwd123',
// 			email: '@email',
// 			avatar: '@image',
// 			status: 'active'
// 		}]
// 	})
// 	user.bulkCreate(mockUsers.users).catch(err => {
// 		console.log(err);
// 	})
// 	console.log('create mock users success \n', mockUsers.users )
// }

export default user;