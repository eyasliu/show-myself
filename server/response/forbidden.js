export default function(data = 'No Access!'){
	this.status = 403;
	this.body = data;
	return this;
}