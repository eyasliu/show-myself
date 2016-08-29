import S from 'sequelize';
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

export default user;