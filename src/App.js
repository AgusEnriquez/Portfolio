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
    <div className="bg-backgroundColor bg-no-repeat bg-cover overflow-hidden">
      <div className="bg-home">
      <Header />
      <Banner />
      </div>
      <About />
      <Nav />
      <Services />
      <Work />
      <Contact />
    </div>
  );
};

export default App;
