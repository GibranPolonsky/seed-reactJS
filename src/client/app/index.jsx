import React from 'react';
import {render} from 'react-dom';

import AwesomeComponent from './components/AwesomeComponent.jsx';
import Result from './components/Result.jsx';
import Card from './components/Card.jsx';

class App extends React.Component {


	constructor(props) {
		super(props);
		this.state = {likesCount : 0};
		this.onLike = this.onLike.bind(this);
	}

	onLike (increment) {
	    let newLikesCount = this.state.likesCount + increment;
	    this.setState({likesCount: newLikesCount});
	    console.log(newLikesCount);
  	}

	render () {
		return (
			<div className="col-md-12">
				<p> Hello WORLD I will love it!</p>
				<AwesomeComponent localOnLike={this.onLike} increment={1}/>
				<AwesomeComponent localOnLike={this.onLike} increment={10}/>
				<AwesomeComponent localOnLike={this.onLike} increment={140}/>
				<AwesomeComponent localOnLike={this.onLike} increment={1200}/>
				<Result localLikesCount={this.state.likesCount}/>
				<Card user="CusProjects"/>
				<Card user="PerLiedman"/>
				<Card user="Google"/>
			</div>
		);
	}

}

render(<App/>, document.getElementById('app'));
