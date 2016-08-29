export default async (c, next) => {
	const start = new Date;
	let logstr = `${start.toString()}`
	await next()
	logstr += '| ' + c.status + ' | ';
	logstr += (new Date) - start + 'ms | ' + c.request.method + ' -> ' + c.url
	console.log(logstr);
}