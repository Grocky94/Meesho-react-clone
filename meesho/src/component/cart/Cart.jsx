import React, { useEffect, useState } from 'react'
import "./../cart/Cart.css"
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const [userCart, setUserCart] = useState([])
  console.log(userCart)
  const [finalPrice, setFinalPrice] = useState(0);
  const [showThankYou, setShowThankYou] = useState(false)
  const alluser = JSON.parse(localStorage.getItem("user"));
  const user = JSON.parse(localStorage.getItem("currentuser"));
  const router = useNavigate();

  useEffect(() => {
    if (user?.email) {
      for (let i = 0; i < alluser.length; i++) {
        if (alluser[i].email === user.email && alluser[i].password === user.password) {
          if (!alluser[i].cart == userCart) {
            setUserCart(alluser[i].cart || []);
          }
          break;
        }
      }
    } else {
      alert('Login before viewing the cart.');
      router('/login');
    }
  }, []);

  useEffect(() => {
    if (userCart.length) {
      var totalPrice = 0;
      for (var i = 0; i < userCart.length; i++) {
        totalPrice += parseInt(userCart[i].Productprice)
        // console.log(userCart ,"-from cart useeffects")
        console.log(totalPrice, "total")
      }
      setFinalPrice(totalPrice)
    }
  }, [userCart])


  const cartDeleting = (index) => {
    const allUser = JSON.parse(localStorage.getItem("user"));
    const user = JSON.parse(localStorage.getItem("currentuser"));
    if (userCart.length) {
      for (let i = 0; i < allUser.length; i++) {
        if (allUser[i].email == user.email && allUser[i].password == user.password) {
          // const product = allUser[i].slice();
          allUser[i].cart.splice(index, 1);
          setUserCart(allUser[i].cart);
          localStorage.setItem("user", JSON.stringify(allUser))
          break
        }
      }

    }
  }

  function buyProducts() {
    const user = JSON.parse(localStorage.getItem("currentuser"));
    if (user?.email) {
      const allUsers = JSON.parse(localStorage.getItem("user"));
      for (var i = 0; i < allUsers.length; i++) {
        if (allUsers[i].email == user.email && allUsers[i].password == user.password) {
          allUsers[i].cart = [];

          localStorage.setItem("user", JSON.stringify(allUsers))
          break;
        }
      }
      setFinalPrice(0)
      setUserCart([]);
      alert("Product will deliver soon, Thank you for shopping.")
      setShowThankYou(true)
    }
  }
  return (
    <div>
      <div id="content-screen">
        <div id="content-alingner">
          <div id="left-hand-side">
            <div id="cart-count">
              <div>Cart</div>
            </div>
            <div className="cart-selected-items">
              {userCart.map((prop, index) => (<div className="align-first-div-within-cart-item" key={index}>
                <div className="item-pic">
                  <div>
                    <img src={prop.Productimage} />
                  </div>
                </div>
                <div className="item-n-wherabout">
                  <p>{prop.Productname}</p>
                  <p>Category: {prop.Productcategory} <span class="dot">.</span></p>
                  <p>₹ {prop.Productprice}</p>
                  <br />
                  <p onClick={() => cartDeleting(index)}> x Remove</p>
                </div>
                <div className="edit">
                  <p>EDIT</p>
                </div>
              </div>))}
              {showThankYou && <div className="thankyou">Thank you</div>}
            </div>
          </div>
          <div id="right-hand-side">
            <div id="price-details">
              <p>Price Details</p>
              <div class="product-price"><span>Total Product Price</span><span>₹ {finalPrice}</span></div>
              <div class="product-price"><span>Order Total</span><span>₹ {finalPrice}</span></div>
              <div id="clickOn">Clicking on 'Continue' will not deduct any money</div>
              <button id="continue" onClick={buyProducts}>Continue</button>
              <div id="meesho-safe">
                <img src="https://images.meesho.com/images/marketing/1588578650850.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Cart
