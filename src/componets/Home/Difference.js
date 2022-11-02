import React from "react";
import {BsFillCaretRightFill} from 'react-icons/all';
import './difference.css';


const Difference = () => {
    return (
        <div className="difference">
            <div className="container">
                <h1>When a man's stomach is full it makes no <br/>
                    difference whether he is rich or poor.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio <br />
                    finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                    <button>
                        <a href="https://www.youtube.com/watch?v=j5Xm1bb3Yxg"><BsFillCaretRightFill /> Watch Our Story</a>
                    </button>
            </div>
        </div>
    );
}


export default Difference;