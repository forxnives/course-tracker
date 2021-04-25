import React, {useState} from 'react'

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
	Link
  } from "react-router-dom";

function LoginPage(props) {


	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ error, setError ] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();



	
		try{
		  const response = await fetch('http://localhost:8082/users/login', {
			method: 'POST',
			headers: {
			  "Content-Type": 'application/json'
			},
			body: JSON.stringify({ email, password})
		  })
		  const data = await response.json();

		  if (!response.ok){
			throw new Error(data.message);
		  }
		  console.log(data)
		  props.setAccessToken(data.accessToken)
		//   props.getUser();


		} catch (err){
		  setError(err.message);
		}
	
	  }



    return (
<div id="login_bg">
	
	<nav id="menu" class="fake_menu"></nav>
	
	<div id="login">
		<aside>
			<figure style={{backgroundColor: '#003049'}} >
				<a href="index.html"><img src="https://static.wixstatic.com/media/369c26_9b881804a868429db8fe1bb25c2bcf2b~mv2.png/v1/fill/w_172,h_34,al_c,q_85,usm_0.66_1.00_0.01/ADTLogo.webp" width="165" height="35" alt="" class="logo_sticky"/></a>
				<h5 style={{color: 'white', opacity: '40%'}}>Course Management System</h5>
			</figure>
			  <form onSubmit={(e)=>handleSubmit(e)}>
				<div class="access_social">
					<a href="#0" class="social_bt facebook">Login with Facebook</a>
					<a href="#0" class="social_bt google">Login with Google</a>
					<a href="#0" class="social_bt linkedin">Login with Linkedin</a>
				</div>
				<div class="divider"><span>Or</span></div>
				<div class="form-group">
					<label>Email</label>
					<input onChange={(e)=>setEmail(e.target.value)} type="email" class="form-control" name="email" id="email"/>
					<i class="icon_mail_alt"></i>
				</div>
				<div class="form-group">
					<label>Password</label>
					<input onChange={(e) => setPassword(e.target.value)} type="password" class="form-control" name="password" id="password" defaultValue=""/>
					<i class="icon_lock_alt"></i>
				</div>
				<div class="clearfix add_bottom_30">
					<div class="checkboxes float-left">
						<label class="container_check">Remember me
						  <input type="checkbox"/>
						  <span class="checkmark"></span>
						</label>
					</div>
					<div class="float-right mt-1"><a id="forgot" href="javascript:void(0);">Forgot Password?</a></div>
				</div>
				<button type='submit'  class="btn_1 rounded full-width">Login Now</button>
				<div class="text-center add_top_10">Are you new? <strong><Link to="/register">Register!</Link></strong></div>
			</form>
			<div class="copy">© 2021 Adtelligent</div>
		</aside>
	</div>

		


  
</div>
    )
}

export default LoginPage
