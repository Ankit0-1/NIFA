import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/HeroSection";
import Slider from "./components/Slider";
import NifaUpdate from "./components/NifaUpdate";
import OnlineClass from "./components/OnlineClass";
import HeroSection from "./components/HeroSection";
import OurCourses from "./components/OurCourses";
import StudentsWork from "./components/StudentsWork";
import StudentsTestimonials from "./components/StudentsTestimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div id="top-container">
        <NavBar />
        <HeroSection />
      </div>
      <Slider />
      <NifaUpdate />
      <OnlineClass />
      <OurCourses />
      <StudentsWork />
      <StudentsTestimonials />
      <Footer />
    </div>
  );
}

export default App;
