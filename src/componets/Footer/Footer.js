import React from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp} from 'react-icons/all';
import './footer.css';

const Footer =() => {

    return (
        <footer>
            <div className="container">
                <div className="medias">
                    <BsTwitter />
                    <BsWhatsapp />
                    <BsFacebook />
                    <BsInstagram />
                </div>
                <div className="text">
                {/* © Copyright 2022  */}
                </div>
            </div>
        </footer>
    )
}

export default Footer;