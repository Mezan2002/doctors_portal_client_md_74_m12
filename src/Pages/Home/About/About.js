import React from "react";
import aboutImage from "../../../assets/images/treatment.png";

const About = () => {
  return (
    <div>
      <div className="hero my-40">
        <div className="hero-content flex-col lg:flex-row">
          <div className="lg:w-1/2 w-full">
            <img
              src={aboutImage}
              className="rounded-lg shadow-2xl mx-auto lg:h-[576px]"
              alt=""
            />
          </div>
          <div className="lg:w-1/2 w-11/12 mx-auto">
            <h1 className="text-5xl font-bold">
              Exceptional Dental <br /> Care, on Your Terms
            </h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
