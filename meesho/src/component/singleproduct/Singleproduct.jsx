import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
import "./Singleproduct.css"

const Singleproduct = () => {
  const [userLogged, setUserLogged] = useState(false);
  const [singleItem, setSingleItem] = useState({})
  // console.log(singleItem, "singleItem here")
  const { id } = useParams();
  const router = useNavigate()
  // for getting selected item in page from all product
  useEffect(() => {
    const product = JSON.parse(localStorage.getItem("product"));
    if (id && product.length) {
      const selectedItem = product.find((item) =>
        item.id == id);
      setSingleItem(selectedItem);
    }
  }, [id]);
  // for checking if user has logged in or not 
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentuser"));
    if (user) {
      setUserLogged(true)

    }
  }, [])

  const addtocart = () => {
    if (userLogged) {
      const alluser = JSON.parse(localStorage.getItem("user"));
      const user = JSON.parse(localStorage.getItem("currentuser"));

      for (let i = 0; i < alluser.length; i++) {

        if (alluser[i].email == user.email && alluser[i].password == user.password) {
          if (alluser[i].role == "buyer") {
            alluser[i].cart.push(singleItem);
            localStorage.setItem("user", JSON.stringify(alluser))
            alert("product added succesfull")
            router("/cart")
          } else {
            alert("seller not allowed to add product in cart")
          }
        }
      }
    } else {
      alert("please login first");
    }
  }
  return (
    <div id="product-parent-screen">
      <div id="align-children-within-screen">
        <div id="left-side-child">
          <div id="first-cont-within-left-side-child">
            <div class="large-image-div">
              <img src={singleItem?.Productimage} />
            </div>
          </div>
          <div id="add-to-cart">
            <div id="child-div-add-to-cart">
              <button onClick={addtocart}><i class="fa-solid fa-cart-shopping"></i><span>Add to Cart</span></button>
            </div>
          </div>
        </div>
        <div id="right-side-child">
          <div id="product-name">
            <p id="name-of-the-product">{singleItem?.Productname}</p>
            <p>₹ {singleItem?.Productprice} <span id="circle">i</span></p>
            <div id="rating-parent">
              <div id="rating">
                <p>3.8</p><i class="fa-solid fa-star"></i>
              </div><span>34878 Ratings, 5117 Reviews</span>
            </div>
            <p>Free delivery</p>
          </div>
          <div id="product-size-div">
            <p>Select Size</p>
            <div id="product-size-option">
              <span>S</span>
              <span>M</span>
              <span>L</span>
              <span>XL</span>
              <span>XXL</span>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Singleproduct
