import React from 'react';

class ButtonFrame extends React.Component{

	constructor(props){
		super(props);
	}

	render(){
		return(
			<div id="button-frame">
				<button onClick={this.props.checkResult} className="btn btn-primary btn-lg" sty>=</button><br/><br/>
				<button onClick={this.props.useAttemp} type="button" className="btn btn-warning"><i className="glyphicon glyphicon-refresh">{"  " + this.props.attemps }</i></button>
			</div>
		);
	}

}

export default ButtonFrame;