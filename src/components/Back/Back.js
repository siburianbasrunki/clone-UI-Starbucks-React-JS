import React from "react";
import back from "../../assets/back.webp"
import "./back.css"

const Back = () => {
    return(
        <div className="back-container">
        <div className="back">
            <div className="back-left">
                <div className="back-title" >Back-to-school smiles</div>
                <div className="back-description">A Starbucks eGift makes an A+ treat for students, teachers and school support staff.</div>
                <div className="back-button back-button-black">
                    Send a eGift
                </div>
            </div>
            <div className="back-right">
                <img src={back} alt="reward-image"/>
            </div>
        </div>
       </div>
    )
}
export default Back;