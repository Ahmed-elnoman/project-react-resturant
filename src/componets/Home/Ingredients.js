import React from "react";
import { BsFillFlagFill } from 'react-icons/all';
import './ingredients.css';
import  ImageR from "./../../assets/22.png";



const Ingredients  = () => {
    return (
        <div className="ingredients">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>We make everything by hand <br/>with
                        the best possible ingredients.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <ul>
                            <li><BsFillFlagFill /> Etiam sed dolor ac diam volutpat.</li>
                            <li><BsFillFlagFill /> Erat volutpat aliquet imperdiet.</li>
                            <li><BsFillFlagFill /> purus a odio finibus bibendum.</li>
                        </ul>
                        <button className="btn btn-danger">Learn more</button>
                    </div>
                    <div className="col-md-6">
                        <img src={ImageR} width="100%" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ingredients;