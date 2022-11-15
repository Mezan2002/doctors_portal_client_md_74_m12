import { format } from "date-fns";
import React from "react";

const BookingModal = ({
  appointmentDetails,
  setAppointmentDetails,
  selectedDate,
}) => {
  const { name, slots } = appointmentDetails;
  const date = format(selectedDate, "PPPP");

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const fullName = form.fullName.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const bookingDetails = {
      appointmentTakingFor: name,
      appointmentDate: date,
      timeOfAppointment: slot,
      fullName,
      email,
      phone,
    };
    setAppointmentDetails(null);

    console.log(bookingDetails);
  };

  return (
    <div>
      <input type="checkbox" id="bookingModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="bookingModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form
            onSubmit={handleBooking}
            className="mt-10 grid grid-cols-1 gap-3"
          >
            <input
              type="text"
              value={date}
              disabled
              className="input input-bordered w-full"
            />
            <select name="slot" className="select select-bordered w-full">
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Full Name"
              name="fullName"
              className="input input-bordered w-full"
            />
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Phone Number"
              name="phone"
              className="input input-bordered w-full"
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-accent btn-block"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
