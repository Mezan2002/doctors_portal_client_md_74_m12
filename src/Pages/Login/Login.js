import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Login = () => {
  const { loginUser, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [logInError, setLogInError] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => setLogInError(error.message));
  };

  const handleLogIn = (data) => {
    console.log(data);
    setLogInError("");
    loginUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setLogInError(error.message);
        console.error(error);
      });
  };
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="card w-[400px] shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl text-center">Log In</h2>
          {logInError && (
            <p className="text-red-600 text-center">{logInError}</p>
          )}
          <div className="">
            <div>
              <form className="mt-9" onSubmit={handleSubmit(handleLogIn)}>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    className="input input-bordered w-full mb-2"
                  />
                  {errors.email?.type === "required" && (
                    <p className="text-red-600" role="alert">
                      Email is required
                    </p>
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
                  New to Doctors Portal?{" "}
                  <Link className="text-secondary" to="/signup">
                    Create an Account
                  </Link>{" "}
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

export default Login;
