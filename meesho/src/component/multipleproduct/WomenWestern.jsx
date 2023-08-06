import React, { useEffect, useState } from 'react'
import "./Multiple.css"
import { useNavigate } from 'react-router-dom';

const WomenWestern = () => {
    const [Products, setProducts] = useState([]);
    const [checkProduct, setCheckProduct] = useState(true); // Added checkProduct state

    const router = useNavigate();

    const sendData = (product) => {
        router(`/singleproduct/${product?.id}`);
    };


    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('product')) || [];
        // Filter products for the Beauty category
        const beautyProducts = items.filter(product => product.Productcategory === 'WomenWestern');
        setProducts(beautyProducts);
    }, []);

    // Set checkProduct based on Products length
    useEffect(() => {
        setCheckProduct(Products.length > 0);
    }, [Products]);

    return (
        <div>
            <div id="multi-product-header">
                <p>Women Western wear</p>
            </div>
            {checkProduct && (<div id="multi-product-screen">
                <div id="inside-multi-product-screen">
                    {/* <!-- product one  --> */}
                    {Products.map((Prop) => (<div className="multi-product-div" key={Prop.id}>
                        <div className="multi-product-image">
                            <img src={Prop.Productimage} />
                        </div>
                        <p>{Prop.Productname}</p>
                        <p><b>₹ {Prop.Productprice}</b> onwards</p>
                        <div className="delivery-div-inside-multi-product">Free Delivery </div>
                        <button id="continue-to-cart" onClick={() => sendData(Prop)}>Add to Cart</button>
                    </div>))}
                </div>
            </div>)}
        </div>
    )
}

export default WomenWestern
