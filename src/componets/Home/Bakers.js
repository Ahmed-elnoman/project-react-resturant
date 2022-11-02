import React from "react";
import './bakers.css';

const Bakers = () => {
  return (
    <div className="bakers">
      <div className="text">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h4>Baked fresh daily by bakers with passion.</h4>
            </div>
            <div className="col-md-6">
                <button className="btn">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bakers;
