import React, {useState} from 'react'

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
	Link
  } from "react-router-dom";

function RegisterPage(props) {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [password2, setPassword2] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [departmentId, setDepartmentId] = useState('');

	const dpWebDev = '607cb63644e9b5b23b9d1dd8'
  
	async function registerUser() {
	  try{

		const body = {
		  email, password, firstName, lastName, departmentId:dpWebDev}


	  
		const response = await fetch ('http://localhost:8082/users', {
		  method: 'POST',
		  headers: {
			'Content-Type': 'application/json',
		  },
		  body: JSON.stringify(body),
		})
  
		const data = await response.json();
		if (!response){
		  throw new Error (data.message);
		}
  
		const loginResponse = await fetch('http://localhost:8082/users/login', {
		  method: 'POST',
		  headers: {
			'Content-Type': 'application/json'
		  },
		  body: JSON.stringify({ email, password }),
		})
  
  
		const loginJson = await loginResponse.json()
		if (!loginResponse.ok) {
		  throw new Error(loginJson.message)
		}
  
		props.setAccessToken(loginJson.accessToken);


  
	  } catch(err){
		console.log(err);
		props.updateUser(undefined);
	  }
	}
  
  
  
	const handleSubmit = (e) => {
	  e.preventDefault();
	  registerUser();
	}







    return (
<div id="register_bg">
	
	<nav id="menu" class="fake_menu"></nav>
	
	<div id="login">
		<aside>
			<figure>
				<a href="index.html"><img src="img/logo_sticky.svg" width="165" height="35" alt="" class="logo_sticky"/></a>
			</figure>
			<form noValidate onSubmit={handleSubmit} autocomplete="off">
				<div class="form-group">
					<label>Your Name</label>
					<input onChange={(e) => setFirstName(e.target.value)} class="form-control" type="text"/>
					<i class="ti-user"></i>
				</div>
				<div class="form-group">
					<label>Your Last Name</label>
					<input onChange={(e) => setLastName(e.target.value)} class="form-control" type="text"/>
					<i class="ti-user"></i>
				</div>
				<div class="form-group">
					<label>Your Email</label>
					<input onChange={(e) => setEmail(e.target.value)} class="form-control" type="email"/>
					<i class="icon_mail_alt"></i>
				</div>
				<div class="form-group">
					<label>Department</label>
					<input onChange={(e) => setDepartmentId(e.target.value)} class="form-control" type="text"/>
					<i class="icon_mail_alt"></i>
				</div>
				<div class="form-group">
					<label>Your password</label>
					<input onChange={(e) => setPassword(e.target.value)} class="form-control" type="password" id="password1"/>
					<i class="icon_lock_alt"></i>
				</div>
				<div class="form-group">
					<label>Confirm password</label>
					<input onChange={(e) => setPassword2(e.target.value)} class="form-control" type="password" id="password2"/>
					<i class="icon_lock_alt"></i>
				</div>
				<div id="pass-info" class="clearfix"></div>
				<button type='submit' href="#0" class="btn_1 rounded full-width add_top_30">Register Now!</button>
				<div class="text-center add_top_10">Already have an acccount? <strong><Link to="/login">Sign In</Link></strong></div>
			</form>
			<div class="copy">© 2018 Sparker</div>
		</aside>
	</div>


	
	
  
</div>
    )
}

export default RegisterPage
