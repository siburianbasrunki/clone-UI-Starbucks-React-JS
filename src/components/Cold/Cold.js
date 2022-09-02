import React from "react";
import cold from "../../assets/cold.jpg"
import "./cold.css"

const Cold = () => {
    return(
        <div className="cold-container">
        <div className="cold">
            <div className="cold-left">
                <div className="cold-title" >Cold brew for two</div>
                <div className="cold-description">Try the new Chocolate Cream Cold Brew with silky, chocolaty cold foam. Or go for a Vanilla Sweet Cream Cold Brew with house-made vanilla-flavored sweet cream.</div>
                <div className="cold-button cold-button-white">
                    Learn More
                </div>
            </div>
            <div className="cold-right">
                <img src={cold} alt="reward-image"/>
            </div>
        </div>
       </div>
    )
}
export default Cold;