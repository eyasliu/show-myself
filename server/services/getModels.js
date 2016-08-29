export default models => {
	if(Array.isArray(models)){
		for(let i in models){
			require('../models/' + models[i]);
		}
	}
}