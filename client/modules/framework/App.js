import Top from './components/Top';
import {Provider} from 'react-redux';
import createStore from 'utils/store';

const store = createStore()

export default class App extends React.Component{
	render(){
		return (
			<div>
				<Top></Top>
				<main>
					{this.props.children}
				</main>
			</div>
		)
	}
}