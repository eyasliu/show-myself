import low from 'lowdb';
import fileAsync from 'lowdb/lib/file-async';

export default class Store{
	constructor(){
		const db = low('localSession.json', {
			storage: fileAsync
		})
		db.defaults({
			session: []
		}).value()

		this.sessions = db.get('session');
	}

	async get(sid){
		console.log('get sid:', sid);
		return await this.sessions.find({sid}).value()
	}

	async set(sid, val){
		console.log('save session:', val);
		return await this.sessions.push({
			sid,
			...val
		}).value()
	}

	async destroy(sid){
		return await this.sessions.remove({sid})
	}
}