const C = Constant('admin-cases');
const init = {
	list: [],
	tags: [],
	view: {}
}

export default Reducer(init)({
[C.of('Create')]: (state, {data}) => ({
	...state,
	list: [
		...state.list,
		data
	]
}),
[C.of('Update')]: (state, {data}) => {
	const list = _.map(state.list, item => item.id == data.id ? data : item)
	return {
		...state,
		list: [
			...list
		]
	}
},
[C.of('GetList')]: (state, action) => ({
	...state,
	list: [
		...action.list
	]
}),
[C.of('GetView')]: (state, {data}) => ({
	...state,
	view: data
}),
[C.of('ResetView')]: state => ({
	...state,
	view: {}
})

})
