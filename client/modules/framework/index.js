import App from './App';
import Cases from 'cases';
import Admin from 'admin/routes';

export default (
	<Router history={RouterHistory}>
		<Route path="/" component={App}>
			{Cases}
			{Admin}
			<IndexRedirect to="/cases" />
		</Route>
	</Router>
)