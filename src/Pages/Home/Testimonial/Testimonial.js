import React from "react";
import quote from "../../../assets/icons/quote.svg";
import person1 from "../../../assets/images/people1.png";
import person2 from "../../../assets/images/people2.png";
import person3 from "../../../assets/images/people3.png";
import UserReview from "./UserReview";

const Testimonial = () => {
  const reviews = [
    {
      _id: 1,
      image: person1,
      name: "Winson Herry",
      location: "California",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      _id: 2,
      image: person2,
      name: "Winson Herry",
      location: "California",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      _id: 3,
      image: person3,
      name: "Winson Herry",
      location: "California",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
  ];
  return (
    <div className="">
      <div className="flex justify-between">
        <div>
          <div>
            <h5 className="text-xl text-primary">Testimonial</h5>
            <h2 className="text-4xl">What Our Patients Says</h2>
          </div>
        </div>
        <div>
          <figure>
            <img className=" w-24 lg:w-48" src={quote} alt="" />
          </figure>
        </div>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <UserReview key={review._id} review={review}></UserReview>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
