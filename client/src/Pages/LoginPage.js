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

		  props.setAccessToken(data.accessToken)
		//   props.getUser();


		} catch (err){
		  alert(err.message);
		}
	
	  }



    return (
<div id="login_bg">
	
	<nav id="menu" className="fake_menu"></nav>
	
	<div id="login">
		<aside>
			<figure style={{backgroundColor: '#003049'}} >
				<a href="https://www.adtelligent.net/"><img src="https://static.wixstatic.com/media/369c26_9b881804a868429db8fe1bb25c2bcf2b~mv2.png/v1/fill/w_172,h_34,al_c,q_85,usm_0.66_1.00_0.01/ADTLogo.webp" width="165" height="35" alt="" className="logo_sticky"/></a>
				<h5 style={{color: 'white', opacity: '40%'}}>Course Management System</h5>
			</figure>
			  <form onSubmit={(e)=>handleSubmit(e)}>
				<div className="access_social">
					<a href="#" className="social_bt facebook">Login with Facebook</a>
					<a href="#" className="social_bt google">Login with Google</a>
					<a href="#" className="social_bt linkedin">Login with Linkedin</a>
				</div>
				<div className="divider"><span>Or</span></div>
				<div className="form-group">
					<label>Email</label>
					<input onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" name="email" id="email"/>
					<i className="icon_mail_alt"></i>
				</div>
				<div className="form-group">
					<label>Password</label>
					<input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" name="password" id="password" defaultValue=""/>
					<i className="icon_lock_alt"></i>
				</div>
				<div className="clearfix add_bottom_30">
					<div className="checkboxes float-left">
						<label className="container_check">Remember me
						  <input type="checkbox"/>
						  <span className="checkmark"></span>
						</label>
					</div>
					<div className="float-right mt-1"><a id="forgot" href="#">Forgot Password?</a></div>
				</div>
				<button type='submit'  className="btn_1 rounded full-width">Login Now</button>
				<div className="text-center add_top_10">Are you new? <strong><Link to="/register">Register!</Link></strong></div>
			</form>
			<div className="copy">© 2021 Adtelligent</div>
		</aside>
	</div>

		


  
</div>
    )
}

export default LoginPage
