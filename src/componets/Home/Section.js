import React from "react";
import './Section.css';


const Section = () => {
    return (
        <section className="number_section">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h1>1287+</h1>
                        <p>savings</p>
                    </div>
                    <div className="col-md-3">
                        <h1>5786+</h1>
                        <p>photos</p>
                    </div>
                    <div className="col-md-3">
                        <h1>1440+</h1>
                        <p>rockets</p>
                    </div>
                    <div className="col-md-3">
                        <h1>7110+</h1>
                        <p>globes</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section;
