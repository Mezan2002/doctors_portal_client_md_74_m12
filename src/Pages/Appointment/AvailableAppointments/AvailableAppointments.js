import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useState } from "react";
import Loading from "../../Shared/Loading/Loading";
import BookingModal from "../BookingModal/BookingModal";
import AppointmentOptionsCard from "./AppointmentOptionsCard";

const AvailableAppointments = ({ selectedDate }) => {
  // const [appointmentOptions, setAppointmentOptions] = useState([]);
  const date = format(selectedDate, "PPPP");
  const [appointmentDetails, setAppointmentDetails] = useState(null);
  const {
    data: appointmentOptions = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointmentOptions", date],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/appointmentOptions?date=${date}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

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
            refetch={refetch}
          ></BookingModal>
        </div>
      )}
    </div>
  );
};

export default AvailableAppointments;
