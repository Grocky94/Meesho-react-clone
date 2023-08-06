import React from 'react'
import "./Multiple.css"
const Kids = () => {
    return (
        <div>
            <div id="multi-product-header">
                <p>Kids wear</p>
            </div>
            <div id="multi-product-screen">
                <div id="inside-multi-product-screen">
                    {/* <!-- product one  --> */}
                    <div className="multi-product-div">
                        <div className="multi-product-image">
                            <img src="https://images.meesho.com/images/products/156800169/npbqn_400.webp" />
                        </div>
                        <p>Fancy Partywear Men Ts..</p>
                        <p><b>₹ 290</b> onwards</p>
                        <div className="delivery-div-inside-multi-product">Free Delivery </div>
                        <button id="continue-to-cart">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Kids
