export default function(data){
	const {response: res} = this;
	res.status = 200;
	res.body = data;
	return this;
}