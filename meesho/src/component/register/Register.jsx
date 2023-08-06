import React from 'react'
import "./../register/Register.css"
const Register = () => {
  return (
    <div>
      <div id="register-screen">
        <div id="div-for-signup">
          <div id="signup-img-div">
            <img src="https://images.meesho.com/images/marketing/1661417516766.webp" />
          </div>
          <p>Sign Up</p>
          <div id="signup-form-div">
            <label>Name</label><br />
            <input type="text" placeholder="Enter full name" /><br />
            <label>Email</label><br />
            <input type="email" placeholder="Enter email" /><br />
            <label>Password</label><br />
            <input type="password" placeholder="Enter password" /><br />
            <input type="submit" value="continue" id="btn" />
          </div>
          <p>Already a member<span className="signup-color-me">Login Here</span></p>
          <p>By countinuing, you agree to Meesho's<br />
            <span className="signup-color-me">Terms & Conditions</span> and <span className="signup-color-me">Privacy Policy</span></p>
        </div>
      </div>

    </div>
  )
}

export default Register
