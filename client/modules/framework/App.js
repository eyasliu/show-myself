import Top from './components/Top';
import {Provider} from 'react-redux';
import createStore from 'utils/store';
import rootReducer from './reducers';

const store = createStore()(rootReducer)

export default class App extends React.Component{
	render(){
		return (
			<Provider store={store}>
				<div>
					<Top></Top>
					<main>
						{this.props.children}
					</main>
				</div>
			</Provider>
		)
	}
}