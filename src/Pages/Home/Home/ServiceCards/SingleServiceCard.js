import React from "react";

const SingleServiceCard = ({ service }) => {
  const { title, image, description } = service;
  return (
    <div>
      <div className="card p-10 w-11/12 mx-auto md:w-full shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">{title}</h2>
          <p className="text-center">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleServiceCard;
