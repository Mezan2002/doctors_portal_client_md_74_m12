import React from "react";
import About from "../About/About";
import AppointmentCard from "../AppointmentCard/AppointmentCard";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import InfoCard from "../InfoCard/InfoCard";
import Testimonial from "../Testimonial/Testimonial";
import ServiceCards from "./ServiceCards/ServiceCards";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <InfoCard></InfoCard>
      <ServiceCards></ServiceCards>
      <About></About>
      <AppointmentCard></AppointmentCard>
      <Testimonial></Testimonial>
      <Contact></Contact>
    </div>
  );
};

export default Home;
