/**
 * create mock data
 * @param  {model} model will mock data model
 * @param  {mockjs rule} rule) generate data rule
 */
const mockData = (model, rule) => () => {
	const Mock = require('mockjs');
	const mockdatas = Mock.mock(rule);
	console.log('================= Create Mock DATA Begin !! ==========================')
	console.log(mockdatas.data)
	model.bulkCreate(mockdatas.data)
	.then(data => {
		console.log('=====================Create Mock DATA Complete !! ==========================')
	})
	.catch(err => {
		console.log(err);
		console.log('=====================Create Mock DATA Error !! ==========================')
	})
}


export default models => {
	const M = {};
	
	/**
	 * load models
	 */
	if(Array.isArray(models)){
		for(let i in models){
			M[models[i]] = require('../models/' + models[i]).default;
		}
	}
	/**
	 * model relation
	 */
	M['cases'].belongsTo(M['user'], {foreignKey: 'author', targetKey: 'username'})

	/**
	 * sync database
	 */
	const forceSync = ["casesxx"] // will force sync, drop first and then create table
	for(let i in models){
		M[models[i]].sync({
			force: forceSync.indexOf(models[i]) > -1
		})
	}

	if(process.env.NODE_ENV === 'development'){
		/**
		 * define mock data
		 */
		const Mock = require('mockjs');
		const mockCases = mockData(M['cases'], {
			'data|10-20': [{
				title: '@word',
				thumb: '@image(700x500)',
				images: JSON.stringify(Mock.mock(['@image', '@image', '@image', '@image'])),
				content: '@cparagraph',
				url: '@url(http)',
				author: 'eyas'
			}]
		})
		const mockUser = mockData(M['user'], {
			'data|10-20': [{
				username: '@word',
				nickname: '@name',
				password: 'passwd123',
				email: '@email',
				avatar: '@image',
				status: 'active'
			}]
		})
		const mockTag = mockData(M['tag'], {
			'users|10-20': [{
				name: '@word',
			}]
		})

		/**
		 * create super user
		 */
		const {superUser} = ServerConfig
		M['user'] && M['user'].findOrCreate({where: {username: superUser.username}, defaults: superUser})
		.spread((user, created) => {})

		/**
		 * start mock
		 */
		// mockCases()
		// mockUser()
		// mockTag()
	}
}
