import React from "react";
import './subscribe.css';


const Subscribe = () => {
    return(
        <div className="subscribe">
            <div className="container">
                <h1>Hurry up! Subscribe our newsletter <br/> and get 25% Off</h1>
                <p>Limited time offer for this month. No credit card required.</p>
                <input type="email" placeholder="Email Address here" />
                <button>Subscribe</button>
            </div>
        </div>
    )

}

export default Subscribe;