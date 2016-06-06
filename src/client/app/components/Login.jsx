import React from 'react';

class Login extends React.Component {

	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className="login"> 


				<button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>
		
				<div id="myModal" className="modal fade" role="dialog">
				  <div className="modal-dialog login-content">

				    <div className="modal-content ">
				    
				      <div className="modal-body">
				        <img src="./assets/aiolos.png" className="login-logo"/>

				         <form className="form login-form" role="form">
					      	<input className="form-control first-input" placeholder="Name"/>
					      	<input className="form-control" placeholder="Mail"/>
					      	<input className="form-control last-input" placeholder="Password"/>
					     
					      	<label className="checkbox-label"> <input type="checkbox" name="checkbox" value="value"/>I accept the <a href="#">Iolos terms</a></label>
					      	<button type="submit" className="btn btn-info btn-accent btn-block"> Sign In </button>
				      	</form>

				      </div>

				     
				     
				    </div>

				  </div>
				</div>


			</div>

		);
	}

}
export default Login;