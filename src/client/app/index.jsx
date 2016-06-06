import React from 'react';
import {render} from 'react-dom';

import AwesomeComponent from './components/AwesomeComponent.jsx';
import Result from './components/Result.jsx';
import Card from './components/Card.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';

import Form from './components/Form.jsx';

import Game from './components/Game.jsx'

class App extends React.Component {


	constructor(props) {
		super(props);
		this.state = {likesCount : 0, logins: []};
		this.onLike = this.onLike.bind(this);
		this.addCard = this.addCard.bind(this);
	}

	onLike (increment) {
	    let newLikesCount = this.state.likesCount + increment;
	    this.setState({likesCount: newLikesCount});
  	}

  	addCard (userName){
  		this.setState({logins: this.state.logins.concat(userName)});
  	}

	render () {
		let cards = this.state.logins.map(n => (<Card key={n} user={n} />));
		return (
			<div className="col-md-12">
				<p> I Love React Components</p>
				<AwesomeComponent localOnLike={this.onLike} increment={1}/>
				<Result localLikesCount={this.state.likesCount}/>
				
				<Form addCard={this.addCard}/>

				{ cards }

				<Game />


			</div>
		);
	}

}

render(<App/>, document.getElementById('app'));
