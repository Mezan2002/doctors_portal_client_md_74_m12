import React from "react";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import SingleInfoCard from "./SingleInfoCard";

const InfoCard = () => {
  const cardsDetail = [
    {
      id: 1,
      title: "Opening Hours",
      description: "Opens at 9.00 am and closed at 9.00pm",
      icons: clock,
      bgClass: "bg-gradient-to-r from-secondary to-primary",
    },
    {
      id: 2,
      title: "Our Location",
      description: "Opens at 9.00 am and closed at 9.00pm",
      icons: marker,
      bgClass: "bg-accent",
    },
    {
      id: 3,
      title: "Opening Hours",
      description: "Opens at 9.00 am and closed at 9.00pm",
      icons: phone,
      bgClass: "bg-gradient-to-r from-secondary to-primary",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10 gap-6">
      {cardsDetail.map((card) => (
        <SingleInfoCard key={card.id} card={card}></SingleInfoCard>
      ))}
    </div>
  );
};

export default InfoCard;
