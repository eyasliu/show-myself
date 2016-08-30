export default function(data = 'bad request'){
	this.status = 400;
	this.body = data;
	return this;
}