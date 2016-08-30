const C = Constant('admin-tags');

export default Reducer([])({
[C.of('Create')]: (state, action) => [
	...state,
	action.data
],
[C.of('Update')]: (state, action) => {
	const {data} = action
	const list = _.map(state, item => item.id == data.id ? data : item)
	return [
		...list
	]
},
[C.of('GetList')]: (state, action) => [
	...action.list
]

})
