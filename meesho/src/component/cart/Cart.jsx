import React from 'react'
import "./../cart/Cart.css"
const Cart = () => {
  return (
    <div>
      <div id="content-screen">
        <div id="content-alingner">
          <div id="left-hand-side">
            <div id="cart-count">
              <div>Cart</div>
            </div>
            <div className="cart-selected-items">
              <div className="align-first-div-within-cart-item">
                <div className="item-pic">
                  <div>
                    <img src="https://images.meesho.com/images/products/29321214/d07af_512.jpg" />
                  </div>
                </div>
                <div className="item-n-wherabout">
                  <p>decor</p>
                  <p>Size: Free Size <span class="dot">.</span><span>Qty: 1</span></p>
                  <p>₹ 480</p>
                  <br/>
                    <p> x Remove</p>
                </div>
                <div className="edit">
                  <p>EDIT</p>
                </div>
              </div>
              <div className="sold-by">
                <div>Sold By : Empire electrotech</div>
                <div>Free Delivery</div>
              </div>
            </div>
          </div>
          <div id="right-hand-side">
            <div id="price-details">
              <p>Price Details</p>
              <div class="product-price"><span>Total Product Price</span><span>₹ 1,198</span></div>
              <div class="product-price"><span>Order Total</span><span>₹ 1,198</span></div>
              <div id="clickOn">Clicking on 'Continue' will not deduct any money</div>
              <button id="continue">Continue</button>
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
