import React from 'react';

import StarsFrame from './StarsFrame.jsx';
import ButtonFrame from './ButtonFrame.jsx';
import AnswerFrame from './AnswerFrame.jsx';
import NumbersFrame from './NumbersFrame.jsx';

class Game extends React.Component{

	constructor(props){
		super(props);
		this.componentDidMount = this.componentDidMount.bind(this);
		this.selectNumber = this.selectNumber.bind(this);
		this.unselectNumber = this.unselectNumber.bind(this);
		this.useAttemp = this.useAttemp.bind(this);
		this.checkResult = this.checkResult.bind(this);
	}
	componentDidMount(){
		this.setState({gameState: 'inProgress',correctNumbers: [], selectedNumbers: [], numberOfStars: Math.floor(Math.random() * 9) + 1, attemps: 5});
	}
	selectNumber(Number){
		if(this.state.selectedNumbers.indexOf(Number) < 0 && this.state.correctNumbers.indexOf(Number) < 0){
			this.setState({selectedNumbers: this.state.selectedNumbers.concat(Number)});
		}
	}
	unselectNumber(Number){
			let index = this.state.selectedNumbers.indexOf(Number);
			this.state.selectedNumbers.splice(index, 1)
			this.setState({selectedNumbers: this.state.selectedNumbers});
	}
	useAttemp(){
		if(this.state.attemps > 0){
		
			this.setState({numberOfStars: Math.floor(Math.random() * 9) + 1});
		}else{
			this.state.gameState = 'over';
			this.setState({'gameState': this.state.gameState});
		}
	}
	checkResult(){
		let total = 0;
		this.state.selectedNumbers.forEach(number => total += number);
		if(total == this.state.numberOfStars){
			this.state.correctNumbers = this.state.correctNumbers.concat(this.state.selectedNumbers);
			this.setState({'correctNumbers': this.state.correctNumbers, 'selectedNumbers': [], numberOfStars: Math.floor(Math.random() * 9) + 1});

			console.log(this.state.correctNumbers.length);
			if(this.state.correctNumbers.length == 9){
				this.state.gameState = 'win';
				this.setState({'gameState': this.state.gameState});
			}

		}else{
			alert("K berguenza prro :'v");
		}
	}




	render(){
		if(this.state != null){
			return(
				<div id="game">
					<h2>Play Nine</h2>
					<hr/>
					<div className="clearfix">
						<StarsFrame numberOfStars={this.state.numberOfStars}/>
						<ButtonFrame checkResult={this.checkResult} attemps={this.state.attemps} useAttemp={this.useAttemp}/>
						<AnswerFrame selectedNumbers={this.state.selectedNumbers} clickNumber={this.unselectNumber}/>
						<NumbersFrame correctNumbers={this.state.correctNumbers} selectedNumbers={this.state.selectedNumbers} clickNumber={this.selectNumber}/>
						{this.state.gameState == 'over' ? (<div className="alert alert-danger">Game Over</div>) : null}
						{this.state.gameState == 'win' ? (<div className="alert alert-success">Congratulations you win</div>) : null}
					</div>
					
				</div>
			);
		}else{
			return(<p> Loading... </p>);
		}
		
	}

}

export default Game;