import React  from 'react';

class Register extends React.Component{

	constructor(props){
		super(props);
	}

	render(){
		return(
			
			<div className="Register"> 

				<link rel="stylesheet"  href="assets/login-style.css"/>

				<a href="#" data-toggle="modal" data-target="#register-modal">Register</a>

				<div className="modal fade" id="register-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
					 <div className="modal-dialog">
						<div className="loginmodal-container">
							<h1>Register</h1><br/>

							 <form>
								<input type="text"  placeholder="Company Name"/>
								<input type="text"   placeholder="Contact Name"/>

								<select className="form-control" pleaceholder="Account Type">
									<option>Cliente</option>
									<option>Freight</option>
								</select>

								<input type="text"   placeholder="Email"/>

								<select className="form-control" pleaceholder="Country">
									<option>Guatemala</option>
									<option>USA</option>
								</select>

								<input type="text"   placeholder="Code area"/>
								<input type="text"   placeholder="Phone"/>


								<input type="submit" name="login" className="login loginmodal-submit" value="Save"/>
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

export default Register;