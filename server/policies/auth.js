export default (c, next) => {
	if(c.isAuthenticated()){
		return next();
	} else {
		c.forbidden()
	}
}