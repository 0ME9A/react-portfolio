import Testimonials from "./components/testimonials/testimonials";
import Experience from "./components/experience/experience";
import Portfolio from "./components/portfolio/portfolio";
import Service from "./components/service/service";
import Contact from "./components/contact/contact";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import About from "./components/about/about";
import Nav from "./components/nav/nav";
import React from "react";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Service />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
