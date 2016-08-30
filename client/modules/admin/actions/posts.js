const C = Constant('admin-posts');

export function updateOrCreate(data){
	const isNew = !data.id;
	const url = config.server + '/post' + (isNew ? '' : '/' + data.id);
	return dispatch => {
		fetchJson(url, {
			method: isNew ? 'POST' : 'PUT',
			body: JSON.stringify(data),
		})
		.then(json => {
			dispatch({
				type: isNew ? C.Create : C.Update
			})
		})
	}
}

export function getList(params){
  return dispatch => {
  	fetchJson(config.server + '/post')
		.then(list => {
			dispatch({
				type: C.GetList,
				list
			})
		})
	}
}

export function remove(id){
	return dispatch => {
		fetchJson(config.server + '/post/' + id, {
			method: 'DELETE'
		})
		.then(data => {
			
		})
	}
}

export function getView(id){
	return dispatch => {
		fetchJson(config.server + '/post/' + id)
		.then(data => {
			dispatch({type: C.GetView, data})
		})
	}
}
