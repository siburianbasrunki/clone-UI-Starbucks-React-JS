import React from "react";
import "./navbar.css"
import starbucks from "../../assets/starbucks.png"
import {ImLocation2} from 'react-icons/im'
import {AiOutlineMenu} from 'react-icons/ai'
const Navbar = () =>{
    return (
        <div className="Navbar">
            <div className="navbar-left">
                <img src={starbucks} alt="logo starbucks"/>

                <div>Menu</div>
                <div>Reward</div>
                <div>Gift Card</div>

            </div>
            <div className="navbar-right">
                <div className="find-store">
                    <ImLocation2/>Find a Store
                </div>
                <div className="button button-sign-in">Sign in</div>
                <div className="button button-join">Join Now</div>
            </div>
            <div className="toggle-responsive">
                <AiOutlineMenu/>
            </div>
        </div>

    )
}

export default Navbar;