import React from 'react';


class Card extends React.Component{

	constructor(props) {
    	super(props);
    	this.props = props;
    	this.componentDidMount = this.componentDidMount.bind(this);
  	}

  	componentDidMount(){
  		

  		fetch('https://api.github.com/users/'+ this.props.user +'?access_token=19939617338240620676c9ea34650765fb48a3f9')  
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

				    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora beatae, dolore fugiat, libero culpa doloremque perspiciatis sunt impedit officia natus nostrum aliquam architecto aspernatur, nulla fuga eaque reiciendis, nesciunt molestiae. </p>

				    <a href={this.state.user.blog} className="btn btn-primary">Company</a>
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