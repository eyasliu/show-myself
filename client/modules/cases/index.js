import App from './App';
import List from './components/List';
import View from './components/View';

export default (
	<Route path="/cases" component={App}>
		<Route path="list" component={List}></Route>
		<Route path=":id" component={View}></Route>
		<IndexRoute component={List}></IndexRoute>
	</Route>
)