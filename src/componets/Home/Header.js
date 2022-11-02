import React from "react";
import {BsFillCartFill} from 'react-icons/all';
import './Header.css';


const Header = () => {
   return (
     <header>
        <div className="container">
           <div className="col-md-6">
             <h1>Good food choices <br/> are good <br/> investments.</h1>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/> Etiam et purus a odio finibus bibendum amet leo.</p>
             <button className="btn now">Order now <BsFillCartFill />
             </button>
             <button className="btn learn">Learn more</button>
           </div>
           <div className="col-md-6">
             {/* <img /> */}
           </div>
        </div>
     </header>
   );
}


export default Header;