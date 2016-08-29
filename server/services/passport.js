import passport from 'koa-passport';
import {Strategy as LocalStrategy} from 'passport-local';

const user = {
	id: 1,
	username: 'test'
}

passport.serializeUser(function(user, done) {
  done(null, user.id)
})

passport.deserializeUser(function(id, done) {
  done(null, user)
})

passport.use(new LocalStrategy((username, password, done) => {
	if(username === 'test' && password === 'test'){
		done(null, user);
	}else{
		done(null, false);
	}
}))

export default passport;