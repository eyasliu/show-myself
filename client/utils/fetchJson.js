export default (url, options = {}) => {
	let fetchUrl = url;
	if(options.query){
		fetchUrl = new URL(window.location.origin + url)
		Object.keys(options.query).forEach(key => (options.query[key] != undefined) && fetchUrl.searchParams.append(key, options.query[key]))
		delete options.query
	}
	return fetch(fetchUrl, {
		headers: {
			'Accept': 'application/json',
	    'Content-Type': 'application/json',
	    ...options.headers
		},
	  credentials: 'include',
		method: 'GET' || options.method,
		...options
	})
	.then(res => res.json())
	.catch(err => console.log(err))

}

