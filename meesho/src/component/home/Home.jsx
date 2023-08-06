import React from 'react'
import "./../home/Home.css"
const Home = () => {
  return (
    <div>
       <div id="only-showing-image-parent">
        {/* <!-- image first  --> */}
        <div id="low-price-div">
            <div id="left-side-low-price-div">
                <div id="align-inside-left-side-lower-price">
                    <div id="heading-for-low-price">
                        <p>Lowest Price <br /> Best Quality Shopping</p>
                    </div>
                    <div id="lowest-price-option">
                        {/* <!-- option one  --> */}
                        <div>
                            <div><img src="https://images.meesho.com/images/pow/freeDelivery_jamun.svg" /></div>
                            <span>free Delivery</span>
                        </div>
                        {/* <!-- option two  --> */}
                        <div>
                            <div><img src="https://images.meesho.com/images/pow/cod_jamun.svg" /></div>
                            <span>Cash on Delivery</span>
                        </div>
                        {/* <!-- option three  --> */}
                        <div>
                            <div><img src="https://images.meesho.com/images/pow/cod_jamun.svg" /></div>
                            <span>Easy Returns</span>
                        </div>
                    </div>
                    <div id="download-meesho">
                        <div>
                            <div id="img-play">
                                <img src="https://images.meesho.com/images/pow/playstoreSmallIcon.png" />
                            </div>
                            <span>Download the Meesho App</span>
                        </div>
                    </div>
                </div>
            </div>
            <div id="right-side-low-price-div">
                <img src="https://images.meesho.com/images/marketing/1686234459500_512.webp" />
            </div>
        </div>
        {/* <!-- second container  --> */}
        <div id="top-cat-conter">
            <div></div>
            <div>
                <p>Top Category to choose from</p>
            </div>
            <div></div>
        </div>
        {/* <!-- third container  --> */}
        <div id="fashion-forward">
            <div id="fashion-forward-inner-align-div">
                <div id="fashion-forward-img-div-left">
                    <img src="https://images.meesho.com/images/marketing/1678691686252_400.webp"/>
                </div>
                <div id="fashion-forward-img-div-middle">
                    <img src="https://images.meesho.com/images/marketing/1678691699680_300.webp"/>
                </div>
                <div id="fashion-forward-img-div-right">
                    <img src="https://images.meesho.com/images/marketing/1678691712594_300.webp"/>
                </div>
            </div>
        </div>
        {/* <!-- fourth container  --> */}
        <div id="essential-parent">
            <div id="align-essential-parent-div">
                <div id="align-essential-parent-div-leftSide">
                    <div>
                        <div></div>
                        <div><img src="https://images.meesho.com/images/marketing/1678691759889_200.webp"/></div>
                    </div>
                </div>
                <div id="align-essential-parent-div-rightSide">
                    <div id="inner-essential-parent-div-rightSide-first">
                        <div>
                            <img src="https://images.meesho.com/images/marketing/1678691846068_200.webp"/>
                        </div>
                        <div>
                            <div>
                                <img src="https://images.meesho.com/images/marketing/1678691858580_150.webp"/>
                            </div>
                        </div>
                    </div>
                    <div id="inner-essential-parent-div-rightSide-second">
                        <div>
                            <img src="https://images.meesho.com/images/marketing/1678691832099_200.webp"/>
                        </div>
                        <div>
                            <div>
                                <img src="https://images.meesho.com/images/marketing/1678691818629_150.webp"/>
                            </div>
                        </div>
                    </div>
                    <div id="inner-essential-parent-div-rightSide-third">
                        <div>
                            <img src="https://images.meesho.com/images/marketing/1678691796046_200.webp"/>
                        </div>
                        <div>
                            <div>
                                <img src="https://images.meesho.com/images/marketing/1678691781261_150.webp"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Home
