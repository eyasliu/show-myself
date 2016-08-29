import Sequelize from 'sequelize';

export default url => new Sequelize(url, {
	logging: process.env.NODE_ENV === 'production' ? false : console.log.bind(console)
});
