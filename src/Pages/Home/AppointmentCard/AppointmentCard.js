import React from "react";
import appointmentBg from "../../../assets/images/appointment.png";
import doctorImage from "../../../assets/images/doctor-small.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const AppointmentCard = () => {
  return (
    <section
      className="mb-20 rounded-xl"
      style={{ backgroundImage: `url(${appointmentBg})` }}
    >
      <div className="hero w-11/12 mx-auto lg:w-full pb-20 md:pb-0">
        <div className="hero-content pb-0 flex-col lg:flex-row">
          <div className="w-1/2">
            <img
              src={doctorImage}
              className="rounded-lg -mt-32 hidden md:block"
              alt=""
            />
          </div>
          <div className="lg:w-1/2 w-full text-white pb-10">
            <h4 className="text-2xl text-primary mb-5">Appointment</h4>
            <h2 className="text-4xl font-bold">Make an appointment Today</h2>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentCard;
