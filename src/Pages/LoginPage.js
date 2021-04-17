import React from 'react'

function LoginPage() {
    return (
<div id="login_bg">
	
	<nav id="menu" class="fake_menu"></nav>
	
	<div id="login">
		<aside>
			<figure>
				<a href="index.html"><img src="img/logo_sticky.svg" width="165" height="35" alt="" class="logo_sticky"/></a>
			</figure>
			  <form>
				<div class="access_social">
					<a href="#0" class="social_bt facebook">Login with Facebook</a>
					<a href="#0" class="social_bt google">Login with Google</a>
					<a href="#0" class="social_bt linkedin">Login with Linkedin</a>
				</div>
				<div class="divider"><span>Or</span></div>
				<div class="form-group">
					<label>Email</label>
					<input type="email" class="form-control" name="email" id="email"/>
					<i class="icon_mail_alt"></i>
				</div>
				<div class="form-group">
					<label>Password</label>
					<input type="password" class="form-control" name="password" id="password" value=""/>
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
				<a href="#0" class="btn_1 rounded full-width">Login Now</a>
				<div class="text-center add_top_10">New to Sparker? <strong><a href="register.html">Sign up!</a></strong></div>
			</form>
			<div class="copy">© 2018 Sparker</div>
		</aside>
	</div>

		


  
</div>
    )
}

export default LoginPage
