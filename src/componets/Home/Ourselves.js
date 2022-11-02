import React from "react";
import './Ourselves.css';
import imageF from './../../assets/11.png';

const Ourselves = () => {
    return (
        <div className="ourselves">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={imageF} alt="" />
                    </div>
                    <div className="col-md-6">
                        <h2>We pride ourselves on making real food from the best ingredients.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                        <button className="btn btn-danger">Learn more</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Ourselves;