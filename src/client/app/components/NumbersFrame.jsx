import React from 'react';

class NumbersFrame extends React.Component{

	constructor(props){
		super(props);
		this.clickNumber = this.clickNumber.bind(this);
	}
	clickNumber(number){
		this.props.clickNumber(number);
	}

	render(){
		let numbers = [], className, selectedNumbers = this.props.selectedNumbers, correctNumbers = this.props.correctNumbers;
		for(let i = 1; i<10; i++){
			
			className ="number selected-" + (selectedNumbers.indexOf(i) >= 0);
			className = (correctNumbers.indexOf(i) >= 0) ? "number correct" : className;

			numbers.push(
				<div className={className} onClick={this.props.clickNumber.bind(null,i)} key={i}>{i}</div>
			);
		}

		return(
			<div id="numbers-frame">
				<div className="well">
					{numbers}
				</div>
			</div>
		);
	}

}

export default NumbersFrame;