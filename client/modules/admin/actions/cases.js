const C = Constant('admin-cases');

export function updateOrCreate(data){
	const isNew = !data.id;
	const url = config.server + '/cases' + (isNew ? '' : '/' + data.id);
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

let limit = 10
export function getList(paged = 0, pageSize){
	limit = pageSize || limit;
  return dispatch => {
  	fetchJson(config.server + '/cases', {query: {paged, limit}})
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
		fetchJson(config.server + '/cases/' + id, {
			method: 'DELETE'
		})
		.then(data => {
			
		})
	}
}

export function getView(id){
	return dispatch => {
		fetchJson(config.server + '/cases/' + id)
		.then(data => {
			dispatch({type: C.GetView, data})
		})
	}
}
export function resetView(){
	return {
		type: C.ResetView
	}
}