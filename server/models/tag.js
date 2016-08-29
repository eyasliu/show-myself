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

export default tag;