import App from './App';
import Cases from 'cases';

export default (
	<Router history={RouterHistory}>
		<Route path="/" component={App}>
			{Cases}
			<IndexRedirect to="/cases" />
		</Route>
	</Router>
)