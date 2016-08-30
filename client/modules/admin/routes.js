import Admin from './'
import Dashboard from './components/Dashboard';
import Cases from './components/Cases/routes';

export default (
<Route path="admin" component={Admin}>
  <Route path="dashboard" component={Dashboard}></Route>
  {Cases}
  <IndexRoute component={Dashboard} />
</Route>
)