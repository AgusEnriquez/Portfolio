import React from "react";

import Banner from "./components/Banner";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <Nav />
      <Services />
      <Work />
      <Contact />
    </div>
  );
};

export default App;
