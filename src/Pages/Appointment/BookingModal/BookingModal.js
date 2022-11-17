import { format } from "date-fns";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const BookingModal = ({
  appointmentDetails,
  setAppointmentDetails,
  selectedDate,
  refetch,
}) => {
  const { name, slots } = appointmentDetails;
  const date = format(selectedDate, "PPPP");
  const { user } = useContext(AuthContext);

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

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          setAppointmentDetails(null);
          toast.success("Booking Confirmed");
          refetch();
        } else {
          toast.error(data.message);
        }
        console.log(data);
      });
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
              defaultValue={user?.displayName}
              disabled
              placeholder="Full Name"
              name="fullName"
              className="input input-bordered w-full"
            />
            <input
              type="email"
              defaultValue={user?.email}
              disabled
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
