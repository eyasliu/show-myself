import Sequelize from 'sequelize';

const seq = new Sequelize(ServerConfig.databaseUrl);

export function init(models){
	if(Array.isArray(models)){
		for(let i in models){
			require('./' + models[i]);
		}
	}else{
		require(models);
	}
}
export default seq;