const C = Constant('cases');

export const getList = (paged = 0) => {
	return async dispatch => {
		try{
			const list = await fetchJson(config.server + '/cases', {query: {paged, limit: 12}})
			dispatch({
				type: C.GetList,
				list
			})
		} catch(e) {}
	}
}