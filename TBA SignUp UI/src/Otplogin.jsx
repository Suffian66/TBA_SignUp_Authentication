import React from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useUserlogin2FAMutation } from './services/Otplogin';


const Otplogin = () => {
  const [userlogin2FA, { data, error, isLoading }] = useUserlogin2FAMutation(); 
  const navigate = useNavigate();

  const { handleSubmit, register, formState: { errors } } = useForm();

  const onSubmit = async (formData) => {
    try {
      const response = await userlogin2FA(formData);

      if (response.data) {
        console.log("OTP verification successful, logging in");
        // Handle successful login, e.g., store JWT token, redirect, etc.
        navigate('/dashboard'); // Redirect to a protected route
      } else {
        console.error("OTP verification failed");
      }
    } catch (err) {
      console.error("Failed to verify OTP:", err);
    }
  };

  return (
    <div>
      <div className="row">
        <div className="col"></div>
        <form
         onSubmit={handleSubmit(onSubmit)}
          className="border rounded p-5 my-4 shadow-lg col-lg-6 col-md-8"
        >
          <div className="text-center"></div>

          <div className="form-group">
            <label className="mt-4" htmlFor="email">
              Enter your OTP Code:
            </label>
            <input
              type="text"
              className="form-control text-muted"
              id="otp"
              placeholder="OTP"
              {...register("otp", { required: true })}
           
            />
          </div>

          <div className="form-group">
            <label className="mt-4" htmlFor="password">
              Enter your Email:
            </label>
            <input
              type="email"
              className="form-control text-muted"
              id="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-sm rounded-pill px-5 py-2 my-5 text-uppercase"
            // disabled={isLoading}
          >
            Sign In
          </button>
        </form>
        <div className="col"></div>
      </div>
    </div>
  )
}

export default Otplogin;
