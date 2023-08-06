import React, { useState } from 'react'
import "./../register/Register.css"
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const [userData, setUserData] = useState({ name: "", email: "", password: "", role: "" })
  const router = useNavigate()
  // console.log(userData)
  const handlechange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value })
  }


  const handleSelector = (event) => {
    setUserData({ ...userData, ["role"]: event.target.value })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    if (userData.name && userData.email && userData.password) {
      const alluser = JSON.parse(localStorage.getItem("user")) || []
      let obj = { name: userData.name, email: userData.email, password: userData.password, role: userData.role, cart: [] }
      alluser.push(obj);
      localStorage.setItem("user", JSON.stringify(alluser));
      alert("registration sucessfull")
      setUserData({ name: "", email: "", password: "", role: "" });
      router("/login")

    } else {
      alert("please fill all details")
      setUserData({})
    }
  }
  return (
    <div>
      <div id="register-screen">
        <div id="div-for-signup">
          <div id="signup-img-div">
            <img src="https://images.meesho.com/images/marketing/1661417516766.webp" />
          </div>
          <p>Sign Up</p>
          <div id="signup-form-div">
            <form onSubmit={handleSubmit}>
              <label>Name</label><br />
              <input type="text" name="name" placeholder="Enter full name" value={userData.name} onChange={handlechange} /><br />
              <label>Email</label><br />
              <input type="email" name="email" placeholder="Enter email" value={userData.email} onChange={handlechange} /><br />
              <label>Password</label><br />
              <input type="password" name="password" placeholder="Enter password" value={userData.password} onChange={handlechange} /><br />
              <div id="register-select-div">
                <select value={userData.role} onChange={handleSelector}>
                  <option >Role</option>
                  <option value="seller">Seller</option>
                  <option value="buyer">Buyer</option>
                </select>
              </div>
              <input type="submit" value="continue" id="btn" />
            </form>
          </div>
          <p>Already a member<span className="signup-color-me" onClick={() => router("/login")}>Login Here</span></p>
          <p>By countinuing, you agree to Meesho's<br />
            <span className="signup-color-me">Terms & Conditions</span> and <span className="signup-color-me">Privacy Policy</span></p>
        </div>
      </div>

    </div>
  )
}

export default Register
