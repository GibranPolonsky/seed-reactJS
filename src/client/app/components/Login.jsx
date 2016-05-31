import React from 'react';

class Login extends React.Component {

	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className="login"> 

				<link rel="stylesheet"  href="assets/login-style.css"/>

				<a href="#" data-toggle="modal" data-target="#login-modal">Login</a>

				<div className="modal fade" id="login-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
					 <div className="modal-dialog">
						<div className="loginmodal-container">
							<h1>Login to Your Account</h1><br/>

							 <form>
								<input type="text" name="user" placeholder="Username"/>
								<input type="password" name="pass" placeholder="Password"/>
								<input type="submit" name="login" className="login loginmodal-submit" value="Login"/>
							  </form>

							<div className="login-help">
								<a href="#">Register</a> - <a href="#">Forgot Password</a>
							</div>

						</div>
					</div>
				</div>


			</div>

		);
	}

}
export default Login;