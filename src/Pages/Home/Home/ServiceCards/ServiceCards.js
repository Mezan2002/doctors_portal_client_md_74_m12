import React from "react";
import fluoride from "../../../../assets/images/fluoride.png";
import Cavity from "../../../../assets/images/cavity.png";
import Whitening from "../../../../assets/images/whitening.png";
import SingleServiceCard from "./SingleServiceCard";

const ServiceCards = () => {
  const servicesDetail = [
    {
      id: 1,
      title: "Fluoride Treatment",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      image: fluoride,
    },
    {
      id: 2,
      title: "Cavity Fillings",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      image: Cavity,
    },
    {
      id: 3,
      title: "Teeth Whitening",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      image: Whitening,
    },
  ];
  return (
    <div className="my-32">
      <div className="text-center">
        <p className="text-2xl font-bold text-secondary">Our Services</p>
        <p className="text-4xl">Services We Provide</p>
      </div>
      <div className="grid grid-cols-1 gap-9 mt-16 md:grid-cols-2 lg:grid-cols-3">
        {servicesDetail.map((service) => (
          <SingleServiceCard
            key={service.id}
            service={service}
          ></SingleServiceCard>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
