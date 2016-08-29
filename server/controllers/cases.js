import Router from 'koa-router';
import Cases from '../models/cases';

const CaseCtrl = new Router({
	prefix: "/cases"
})

// cases list ,has pagenation
CaseCtrl.get('/', async c => {
	const query = Object.assign({
		paged: 0,
		limit: 10
	}, c.query)
	const pageCase = await Cases.findList({}, query.paged, query.limit)
	c.ok(pageCase);
})

// create
CaseCtrl.post('/', async c => {
	const {body} = c.request;
	try{
		const cases = await Cases.create(body);
		c.ok(cases);
	} catch(e){
		c.badRequest(e.errors)
	}
})

// get one
CaseCtrl.get('/:id', async c => {
	const {id} = c.params
	const cases = await Cases.findById(id)
	// const ccc = await cases.setUser(68)
	// cases.author = await cases.getUser({where: {id: 68}})
	if(cases){
		c.ok(cases);
	}else{
		c.notFound();
	}
})

// delete
CaseCtrl.delete('/:id', async c => {
	try{
		const cases = await Cases.findById(c.params.id)
		const result = await cases.destroy()
		c.ok(result);
	}catch(err){
		c.badRequest()
	}
})

// update
CaseCtrl.put('/:id', async c => {
	const {body} = c.request;
	try{
		const cases = await Cases.findById(c.params.id)
		const result = await cases.update(body)
		c.ok(result);
	}catch(err){
		c.badRequest()
	}
})



export default CaseCtrl.routes();