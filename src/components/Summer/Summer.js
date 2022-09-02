import React from "react";
import summer from "../../assets/summer.jpg"
import "./summer.css"
const Summer = () => {
    return (
        <div className="summer-container">
        <div className="summer">
            <div className="summer-left">
                <img src={summer} alt="image-summer"/> 
            </div>
            <div className="summer-right">
            <div className="summer-title">
                Summer’s brightest new drinks
                </div>
                <div className="summer-description">Introducing the Pineapple Passionfruit Starbucks Refreshers® beverage and the Starbucks® Paradise Drink with creamy coconutmilk.</div>
                <div className="summer-button summer-button-black">Learn More</div>
            </div>
        </div>
       </div>

    )

}

export default Summer;
