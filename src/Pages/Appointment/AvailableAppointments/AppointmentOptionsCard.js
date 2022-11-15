import React from "react";

const AppointmentOptionsCard = ({
  appointmentOption,
  setAppointmentDetails,
}) => {
  const { name, slots } = appointmentOption;
  return (
    <div className="card shadow-xl mt-10">
      <div className="card-body text-center">
        <h2 className="text-primary text-center text-3xl font-bold">{name}</h2>
        <p>
          {slots.length > 0 ? slots[0] : "No Slots Available Try Another Day"}
        </p>
        <p>
          {slots.length} {slots.length > 1 ? "Spaces" : "Space"} Available{" "}
        </p>
        <div className="card-actions justify-center">
          <label
            disabled={slots.length === 0}
            onClick={() => setAppointmentDetails(appointmentOption)}
            htmlFor="bookingModal"
            className="btn btn-primary text-white"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOptionsCard;
