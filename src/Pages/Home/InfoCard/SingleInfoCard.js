import React from "react";

const SingleInfoCard = ({ card }) => {
  const { title, description, icons, bgClass } = card;
  return (
    <div
      className={`card text-center w-11/12 lg:w-full mx-auto md:text-left md:card-side shadow-xl p-6 text-white ${bgClass}`}
    >
      <figure>
        <img src={icons} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="text-center md:text-left text-2xl font-bold">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SingleInfoCard;
