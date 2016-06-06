import React from 'react';
import ReactDOM from 'react-dom';

class Form extends React.Component{

	constructor(props){
		super(props);
		this.props = props;
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e){
		e.preventDefault();
		let loginInput = ReactDOM.findDOMNode(this.refs.search);

		this.props.addCard(loginInput.value);

		loginInput.value = '';
	}

	render(){
		return(

			<form className="search" onSubmit={this.handleSubmit}>
				<div className="form-group">
					<label for="search" className="control-label"> Search </label>
					<input className="form-control" ref="search" pleaceholder="Search"/> 
				</div>

				<div className="form-group">

					<input type="submit" className="btn btn-success" value="Add"/>

				</div>

			</form>
			

		);
	}

}

export default Form;