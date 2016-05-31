import React from 'react';


class Card extends React.Component{

	constructor(props) {
    	super(props);
    	this.props = props;
    	this.componentDidMount = this.componentDidMount.bind(this);
  	}

  	componentDidMount(){
  		

  		fetch('https://api.github.com/users/'+ this.props.user +'?access_token=51d910483cb7abafcb9922fbcee3b15bf0f3fac4')  
	    .then((response) => {
	        return response.json()
	    })
	    .then((recurso) => {

	        this.setState({user: recurso});
	       
	    });

  	}

  	render() {
  		if(this.state != null){
  			return (

		    	<div className="card">
				  <div className="card-block">

				  	<img style={{float: 'right'}} width="100px" height="100px" src={this.state.user.avatar_url}/>
				    <h4 className="card-title">{  this.state.user.name }</h4>
				   
				    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
				    <a href="#" className="btn btn-primary">Go somewhere</a>
				  </div>
				</div>
	   		);

  		}else{
  			return (
  				<p>Loading...</p>
  			)
  		}
	    
  	}

}

export default Card;