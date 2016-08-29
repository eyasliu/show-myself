export default function(data){
	this.status = 404;
	this.body = process.env.NODE_ENV === 'production' ? null : data;
	return this;
}