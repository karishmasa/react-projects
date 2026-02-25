import React from "react";
import Hero from './components/Hero';
import Navbar from "./components/Navbar";
import CompanyLogo from "./components/CompanyLogo";
import Products from "./components/Products";
import CTA from "./components/CTA";
import AppDownload from "./components/AppDownload"
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <CompanyLogo />
      <Products />
      <CTA />
      <AppDownload />
      <Testimonial />
      <Footer />

    </div>
  )
}


export default App;
