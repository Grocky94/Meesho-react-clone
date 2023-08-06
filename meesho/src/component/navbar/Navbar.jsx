import React from 'react'
import "./../navbar/Navbar.css"
const Navbar = () => {
  return (
    <div>
      <nav>
        <div id="inner-nav">
          <div id="logo">
            <img
              src="data:image/png;base64,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" />
          </div>
          <div id="search">
            <div id="search-box">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input placeholder="Try Saree,Kurti or Search by Product Code" />
            </div>
          </div>
          <div id="nav-right-side">
            <div id="download">
              <i class="fa-solid fa-mobile-screen-button"></i>
              <span>Download App</span>
            </div>
            <div id="supplier">
              <span>Become a Supplier</span>
            </div>
            <div id="profile-cart">
              <span>
                <i className="fa-regular fa-user"></i>
                <span>Profile</span>
              </span>
              <span>
                <i className="fa-solid fa-cart-shopping"></i>
                <span>Cart</span>
              </span>
            </div>
          </div>
        </div>
      </nav>
      <div id="second-nav">
        <div id="inner-second-nav">
          <div className="second-nav-list">Women Ethnic</div>
          <div className="second-nav-list">Women Western</div>
          <div className="second-nav-list">Men</div>
          <div className="second-nav-list">Kids</div>
          <div className="second-nav-list">Home & Kitchen</div>
          <div className="second-nav-list">Beauty & Health</div>
          <div className="second-nav-list">Jewellery & Accessories</div>
          <div className="second-nav-list">Bags & Footwear</div>
          <div className="second-nav-list">Electronics</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
