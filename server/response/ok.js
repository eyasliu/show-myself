export default function(data){
	this.status = 200;
	this.body = data || '';
	return this;
}