const C = Constant('cases');

const list = Reducer({
	values: []
})({
	[C.of('GetList')]: (state, action) => ({
		...state,
		values: [
			...action.list
		]
	})
})

const view = Reducer({
	data: {}
})({
	[C.of('GetView')]: (state, action) => ({
		...state,
		data: {
			...action.data
		}
	})
})

export default combineReducers({
	list,
	view
})