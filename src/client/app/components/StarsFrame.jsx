import React from 'react';

class StarsFrame extends React.Component{

	constructor(props){
		super(props);
	}

	render(){


		let stars = [];

		for(let i = 0; i<this.props.numberOfStars; i++){
			stars.push(
				<span key={i} className="glyphicon glyphicon-star"></span>
			);
		}


		return(
			<div id="stars-frame">
				<div className="well">
					{stars}
				</div>
			</div>
		);
	}

}

export default StarsFrame;