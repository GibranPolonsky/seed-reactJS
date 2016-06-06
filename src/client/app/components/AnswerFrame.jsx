import React from 'react';

class AnswerFrame extends React.Component{

	constructor(props){
		super(props);

		this.props = props;
	}

	render(){
		let numbers = [];

		this.props.selectedNumbers.forEach(number => numbers.push((<span onClick={this.props.clickNumber.bind(null, number)} key={number}>{number}</span>)));


		return(
			<div id="answer-frame">
				<div className="well">
					{numbers}
				</div>
			</div>
		);
	}

}

export default AnswerFrame;