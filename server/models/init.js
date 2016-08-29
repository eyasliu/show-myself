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
	const forceSync = []
	for(let i in models){
		M[models[i]].sync({
			force: forceSync.indexOf(models[i]) > -1
		})
	}

	/**
	 * define mock data
	 */
	const Mock = require('mockjs');
	const mockCases = mockData(M['cases'], {
		'data|10-20': [{
			title: '@word',
			thumb: '@image',
			images: JSON.stringify(Mock.mock(['@image', '@image', '@image', '@image'])),
			content: '@cparagraph',
			url: '@url(http)',
			userId: 'eyas'
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
	 * start mock
	 */
	mockCases()
	// mockUser()
	// mockTag()
}
