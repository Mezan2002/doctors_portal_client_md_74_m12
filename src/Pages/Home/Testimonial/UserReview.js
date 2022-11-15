import React from "react";

const UserReview = ({ review }) => {
  const { name, image, location, review: userReview } = review;
  return (
    <div>
      <div className="card shadow-xl mb-20">
        <div className="card-body">
          <p>{userReview}</p>
          <div className="flex items-center mt-6">
            <div className="avatar mr-5">
              <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img className="" src={image} alt="" />
              </div>
            </div>
            <div>
              <h5 className="text-xl">{name}</h5>
              <p>{location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserReview;
