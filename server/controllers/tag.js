import Router from 'koa-router';
import Tag from '../models/tag';

const tag = new Router({
	prefix: '/tag'
})

tag.get('/', async c => {
	const tags = await Tag.findAll()
	c.ok(tags)
})

tag.get('/:id', async c => {
	const theTag = await Tag.findById(c.params.id)
	if(theTag){
		c.ok(theTag);
	} else {
		c.notFound()
	}
})

tag.post('/', async c => {
	const {body} = c.request;
	try{
		const theTag = await Tag.create(body);
		c.ok(theTag);
	}catch(e){
		c.badReauest(e.errors)
	}
})

tag.put('/:id', async c => {
	const theTag = await Tag.findById(c.params.id)
	if(theTag){
		const result = await theTag.update(c.request.body)
		c.ok(result);
	}else{
		c.notFound();
	}
})

tag.delete('/:id', async c => {
	const theTag = await Tag.findById(c.params.id)
	if(theTag){
		const result = await theTag.destroy();
		c.ok(result)
	}else{
		c.notFound()
	}
})

export default tag.routes();