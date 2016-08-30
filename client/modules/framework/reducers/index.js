import cases from 'cases/reducers';
import admin from 'admin/reducers';

const demo = Reducer({isDemo: true})({

})

export default combineReducers({
	demo,
	cases,
	admin
})