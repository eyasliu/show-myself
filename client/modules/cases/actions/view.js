const C = Constant('cases');

export function getView(id){
	return async dispatch => {
		dispatch({
			type: C.GetView,
			data: await fetchJson(config.server + '/cases/' + id)
		})
	}
}