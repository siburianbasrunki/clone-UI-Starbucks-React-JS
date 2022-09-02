import React from "react";
import reward from "../../assets/reward.jpg"
import "./reward.css"
const Reward = () => {
    return(
       <div className="reward-container">
        <div className="reward">
            <div className="reward-left">
                <img src={reward} alt="reward-image"/>
            </div>
            <div className="reward-right">
                <div className="reward-title" >Summer is brighter with free treats.*</div>
                <div className="reward-button reward-button-white">
                    Join Starbucks Reward
                </div>
            </div>
        </div>
       </div>
    )
}

export default Reward;