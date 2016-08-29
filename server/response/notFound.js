export default function(data){
	const {request: res} = this;
	res.status = 404;
	res.body = process.env.NODE_ENV === 'production' ? null : data;
	return this;
}