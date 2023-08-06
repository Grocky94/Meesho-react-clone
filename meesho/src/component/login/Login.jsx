import React, { useContext, useState } from 'react'
import "./../login/Login.css"
import { MyContext } from "./../authcontext/MyContext"
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [userData, setUserData] = useState({ email: "", password: "" });
  const { LOGIN } = useContext(MyContext);
  const router = useNavigate()

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if (userData.email && userData.password) {
      const alluser = JSON.parse(localStorage.getItem("user"));
      let flag = false;
      for (let i = 0; i < alluser.length; i++) {
        if (alluser[i].email == userData.email && alluser[i].password == userData.password) {

          LOGIN(alluser[i]);
          alert("login successfull");
          setUserData({ email: "", password: "" })
          flag = true;
          router("/")
          break;
        } if (flag == false) {
          alert("incorrect details");
        }
      }
    } else {
      alert("please fill all areas");
      setUserData({})
    }
  }

  return (
    <div>
      <div id="login-screen">
        <div id="div-for-login">
          <div id="login-img-div">
            <img src="https://images.meesho.com/images/marketing/1661417516766.webp" />
          </div>
          <p>Log In </p>
          <div id="login-form-div">
            <form onSubmit={handleSubmit}>
              <label>Email</label><br />
              <input type="email" placeholder="Enter email" name="email" value={userData.email} onChange={handleChange} /><br />
              <label>Password</label><br />
              <input type="password" placeholder="Enter password" name="password" value={userData.password} onChange={handleChange} /><br />
              <input type="submit" value="continue" id="btn" />
            </form>
          </div>
          <p>New member<span class="color-me" onClick={() => router("/register")}>Register Here</span></p>
          <p>By countinuing, you agree to Meesho's<br />
            <span class="color-me">Terms & Conditions</span> and <span class="color-me">Privacy Policy</span></p>
        </div>
      </div>

    </div>
  )
}

export default Login
