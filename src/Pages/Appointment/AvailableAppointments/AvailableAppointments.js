import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "../BookingModal/BookingModal";
import AppointmentOptionsCard from "./AppointmentOptionsCard";

const AvailableAppointments = ({ selectedDate }) => {
  const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [appointmentDetails, setAppointmentDetails] = useState(null);
  useEffect(() => {
    fetch("appointmentOptions.json")
      .then((res) => res.json())
      .then((data) => setAppointmentOptions(data));
  }, []);
  return (
    <div className="mb-20">
      <p className="text-center text-sm md:text-xl text-secondary font-bold">
        Available Appointments on {format(selectedDate, "PPPP")}
      </p>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {appointmentOptions.map((appointmentOption) => (
          <AppointmentOptionsCard
            key={appointmentOption._id}
            appointmentOption={appointmentOption}
            setAppointmentDetails={setAppointmentDetails}
          ></AppointmentOptionsCard>
        ))}
      </div>
      {appointmentDetails && (
        <div>
          <BookingModal
            selectedDate={selectedDate}
            appointmentDetails={appointmentDetails}
            setAppointmentDetails={setAppointmentDetails}
          ></BookingModal>
        </div>
      )}
    </div>
  );
};

export default AvailableAppointments;
