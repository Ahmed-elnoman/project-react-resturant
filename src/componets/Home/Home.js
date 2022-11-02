import React, { Fragment } from "react";
import Bakers from "./Bakers";
import Difference from "./Difference";
import ExploreOurFoods from "./ExploreOurFoods";
import Header from "./Header";
import Ingredients from "./Ingredients";
import Ourselves from "./Ourselves";
import Section from "./Section";
import Subscribe from "./Subscribe";
import Testimonials from "./Testimonials";

const Home  = () => {

    return (
        <Fragment>
            <Header />
            <Section />
            <Ourselves />
            <Ingredients />
            <Difference />
            <ExploreOurFoods />
            <Testimonials />
            <Bakers />
            <Subscribe />
        </Fragment>
    );
}

export default Home;