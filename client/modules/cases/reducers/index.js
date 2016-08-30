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

export default combineReducers({
	list
})