import React from "react";
import {BsStars} from 'react-icons/all';
import "./testimonials.css";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="container">
        <h1>Frequently Asked Questions</h1>
        <div className="row">
          <div className="col-md-6 m">
            <h5> <BsStars /> Is Foodera Bread really baked fresh each day?</h5>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language.
            </p>
          </div>
          <div className="col-md-6">
            <h5> <BsStars /> Do you bake breads containing animal fats or products?</h5>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 m">
            <h5> <BsStars /> Can I order your products online?</h5>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language.
            </p>
          </div>
          <div className="col-md-6">
            <h5> <BsStars /> When are you opening a shop near me?</h5>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
