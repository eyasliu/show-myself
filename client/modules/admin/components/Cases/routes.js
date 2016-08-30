import Books from './'
import List from './List';
import Edit from './Edit';
import Tags from '../Tags'

export default (
<Route path="cases" component={Books}>
  <Route path="list" component={List}></Route>
  <Route path="edit/:id" component={Edit}></Route>
  <Route path="add" component={Edit}></Route>
  <Route path="tags" component={Tags}></Route>
  <IndexRoute component={List} />
</Route>
)