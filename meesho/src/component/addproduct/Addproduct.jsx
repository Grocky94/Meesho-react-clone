import React, { useContext, useState } from 'react'
import "./Addproduct.css"
import { v4 as uuidv4 } from 'uuid';
import { MyContext } from "./../authcontext/MyContext"

const Addproduct = () => {
    const { ADDPRODUCT } = useContext(MyContext);
    const [product, setProduct] = useState({ Productname: "", Productimage: "", Productprice: "", Productcategory: "" });
    const handleChange = (event) => {
        setProduct({ ...product, [event.target.name]: event.target.value })
    }
    const handleSelector = (event) => {
        setProduct({ ...product, ["Productcategory"]: event.target.value })
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        if (product.Productname && product.Productimage && product.Productprice && product.Productcategory) {
            const items = JSON.parse(localStorage.getItem("product")) || [];
            const randomId = uuidv4();
            product["id"] = randomId;
            let obj = { ...product }
            items.push(obj);
            ADDPRODUCT(items);
            alert("product added successfully")
            setProduct({ Productname: "", Productimage: "", Productprice: "", Productcategory: "" })
        } else {
            alert("please fill all areas")
        }

    }
    return (
        <div id="add-product-screen">
            <div id="div-for-add-product">
                <div id="add-product-img-div">
                    <img src="https://images.meesho.com/images/marketing/1661417516766.webp" />
                </div>
                <p>sign Up to view your profile</p>
                <div id="add-product-form-div">
                    <form onSubmit={handleSubmit}>
                        <label>Name</label><br />
                        <input type="text" placeholder="Enter Product name" name='Productname' value={product.Productname} onChange={handleChange} /><br />
                        <label>Image</label><br />
                        <input type="text" placeholder="Enter Image file" name="Productimage" value={product.Productimage} onChange={handleChange} /><br />
                        <label>Price</label><br />
                        <input type="number" placeholder="Enter price" name="Productprice" value={product.Productprice} onChange={handleChange} /><br />
                        <div id="selector-div">
                            <select value={product.Productcategory} onChange={handleSelector}>
                                <option>Categories</option>
                                <option value="WomenEthenic">Women Ethenic</option>
                                <option value="WomenWestern">Women Western</option>
                                <option value="Men">Men</option>
                                <option value="Kids">Kids</option>
                                <option value="HomenKitchen">Home n Kitchen</option>
                                <option value="BeautynHealth">Beauty n Health</option>
                                <option value="Jewellerynaccessories">Jewellery n accessories</option>
                                <option value="BagsnFootwears">Bags n Footwears</option>
                                <option value="Electronics">Electronics</option>
                            </select>
                        </div>
                        <input type="submit" value="continue" id="btn" />
                    </form>
                </div>
                <p>Already a member<span class="add-product-color-me">Login Here</span></p>
                <p>By countinuing, you agree to Meesho's<br />
                    <span class="add-product-color-me">Terms & Conditions</span> and <span class="add-product-color-me">Privacy Policy</span></p>
            </div>
        </div>

    )
}

export default Addproduct
