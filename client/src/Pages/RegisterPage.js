import React, {useState} from 'react'
import Dropdown from 'react-dropdown';

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



	const dropdownOptions = props.departments.map(department => ({value: department._id, label: department.name}))
	const defaultOption = dropdownOptions[0];
  
	async function registerUser() {
	  try{

		const body = {
		  email, password, firstName, lastName, departmentId:departmentId}


	  
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
		<figure style={{backgroundColor: '#003049'}} >
				<a href="https://www.adtelligent.net/"><img src="https://static.wixstatic.com/media/369c26_9b881804a868429db8fe1bb25c2bcf2b~mv2.png/v1/fill/w_172,h_34,al_c,q_85,usm_0.66_1.00_0.01/ADTLogo.webp" width="165" height="35" alt="" class="logo_sticky"/></a>
				<h5 style={{color: 'white', opacity: '40%'}}>Course Management System</h5>
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
					<Dropdown  options={dropdownOptions} onChange={(e) => setDepartmentId(e.value)} value={departmentId} placeholder="Select an option" />;
					{/* <input onChange={(e) => setDepartmentId(e.target.value)} class="form-control" type="text"/> */}
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
				<div class="text-center add_top_10">Already have an acccount? <strong><Link to="/app/home">Sign In</Link></strong></div>
			</form>
			<div class="copy">© 2021 Adtelligent</div>
		</aside>
	</div>


	
	
  
</div>
    )
}

export default RegisterPage
