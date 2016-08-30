import App from './App';
import List from './components/List';

export default (
	<Route path="/cases" component={App}>
		<Route path="list" component={List}></Route>
		<IndexRoute component={List}></IndexRoute>
	</Route>
)