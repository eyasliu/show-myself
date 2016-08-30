import Top from './components/Top';
import Footer from './components/Footer';
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
					<main className="main">
						{this.props.children}
					</main>
					<Footer></Footer>
				</div>
			</Provider>
		)
	}
}