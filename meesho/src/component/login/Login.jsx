import React from 'react'
import "./../login/Login.css"
const Login = () => {
  return (
    <div>
      <div id="login-screen">
        <div id="div-for-login">
          <div id="login-img-div">
            <img src="https://images.meesho.com/images/marketing/1661417516766.webp" />
          </div>
          <p>Log In </p>
          <div id="login-form-div">
            <label>Email</label><br />
            <input type="email" placeholder="Enter email" /><br />
            <label>Password</label><br />
            <input type="password" placeholder="Enter password" /><br />
            <input type="submit" value="continue" id="btn" />
          </div>
          <p>New member<span class="color-me"><a href="meesho-register.html">Register Here</a></span></p>
          <p>By countinuing, you agree to Meesho's<br />
            <span class="color-me">Terms & Conditions</span> and <span class="color-me">Privacy Policy</span></p>
        </div>
      </div>

    </div>
  )
}

export default Login
