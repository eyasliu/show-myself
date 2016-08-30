const C = Constant('admin-tags');

export function getList(){
	return dispatch => {
		fetchJson(config.server + '/tag')
		.then(data => {
			dispatch({
				type: C.GetList,
				list: data
			})
		})
	}
}

export function updateOrCreate(data){
	const isNew = !data.id
	const url = config.server + (isNew ? '/tag' : '/tag/' + data.id)
	return dispatch => {
		fetchJson(url, {
			method: isNew ? 'POST' : 'PUT',
			body: JSON.stringify(data)
		})
		.then(item => {
			dispatch({
				type: isNew ? C.Create : C.Update,
				data: item 
			})
		})
	}
}

export function destory(id){
	return dispatch => {
		fetchJson(config.server + '/tag/' + id, {
			method: 'DELETE'
		})
		.then(res => {
			dispatch({
				type: C.Destory
			})
		})
	}
}