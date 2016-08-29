export default function getList(query, paged = 0, limit = 30, order = 'asc'){
	const offset = paged * limit;
	return this.findAll({
		...query,
		limit,
		offset
	})
}