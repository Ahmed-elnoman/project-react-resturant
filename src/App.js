import React, { Fragment } from 'react';
import Footer from './componets/Footer/Footer';
import Home from './componets/Home/Home';
import Navs from './componets/Navbar/Navs';

function App() {
  return (
    <Fragment>
      <Navs />
      <Home />
      <Footer />
    </Fragment>
  );
}

export default App;
