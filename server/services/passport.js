import passport from 'koa-passport';
import {Strategy as LocalStrategy} from 'passport-local';
import Encrypt from './Encrypt';
import User from '../models/user';

passport.serializeUser(function(user, done) {
  done(null, user.id)
})

passport.deserializeUser(async function(id, done) {
	const user = await User.findById(id)
  done(null, user)
})

passport.use(new LocalStrategy(async (username, password, done) => {
	const user = await User.findByUsername(username)
	if(user){
		if(user && user.username === username && Encrypt.validate(password, user.password)){
			done(null, user)
		} else {
			done(null, false, {
				msg: 'password invalid'
			})
		}
	}else{
		done(null, false, {
			msg: 'can\'t find the user'
		})
	}
}))

export default passport;