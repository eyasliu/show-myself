import Top from 'fw/components/Top';
import Footer from 'fw/components/Footer';

export default class App extends React.Component{
	render(){
		return (
			<div>
				<Top></Top>
				<main className="mainContent">
					{this.props.children}
				</main>
				<Footer></Footer>
			</div>
		)
	}
}