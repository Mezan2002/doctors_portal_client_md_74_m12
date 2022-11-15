import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const SignUp = () => {
  const { createUser, updateUser, googleLogin } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => setSignUpError(error.message));
  };

  const handleSignUp = (data) => {
    console.log(data);
    setSignUpError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        toast.success("User Sign Up Successfully");
        console.log(user);
        const userInforToUpdate = {
          displayName: data.name,
        };
        updateUser(userInforToUpdate)
          .then(() => {})
          .catch((error) => console.log(error));
      })
      .catch((error) => setSignUpError(error.message));
  };
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="card w-[400px] shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl text-center">Sign Up</h2>
          {signUpError && (
            <p className="text-red-600 text-center">{signUpError}</p>
          )}
          <div className="">
            <div>
              <form onSubmit={handleSubmit(handleSignUp)} className="mt-9">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    {...register("name", {
                      required: "Name is required",
                    })}
                    className="input input-bordered w-full mb-2"
                  />
                  {errors.name && (
                    <p className="text-red-600">{errors.name.message}</p>
                  )}
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                    })}
                    className="input input-bordered w-full mb-2"
                  />
                  {errors.email && (
                    <p className="text-red-600">{errors.email.message}</p>
                  )}
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password Should be 6 Character or Longer",
                      },
                      pattern: {
                        value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                        message:
                          "Password Must Have Uppercase, Number and a Special Character",
                      },
                    })}
                    className="input input-bordered w-full"
                  />
                  <label className="label">
                    <span className="label-text-alt">Forgot Password?</span>
                  </label>
                  {errors.password && (
                    <p className="text-red-600">{errors.password.message}</p>
                  )}
                </div>
                <input
                  type="submit"
                  className="btn btn-block btn-accent"
                  value="Log In"
                />
                <p className="text-center mt-2">
                  Already Have an Account?
                  <Link className="text-secondary" to="/login">
                    Please Log In
                  </Link>
                </p>
                <div className="divider">OR</div>
              </form>
              <button
                onClick={handleGoogleLogin}
                className="btn btn-outline btn-accent btn-block"
              >
                Continue With Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
