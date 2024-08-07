// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useForm } from 'react-hook-form';
import { useForgotPasswordMutation } from '../services/api/ForgotPassword';

const ForgotPassword = () => {
  const [forgotPassword, { data, error, isLoading }] = useForgotPasswordMutation();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    console.log(formData);
    try {
      const response = await forgotPassword(formData).unwrap();
      console.log("Password reset link sent", response);
      alert("Password reset link has been sent to your email.");
    } catch (err) {
      console.error("Failed to send password reset link: ", err);
      alert("Failed to send password reset link Kindly check your Email Address");
    }
    window.location.reload();
  };


  return (
    <div className="row justify-content-center">
      <div className="col-4 mx-5 py-5 ">
        <h1 className='py-5 text-danger'>RESET YOUR PASSWORD!</h1>
        <div className="card shadow py-5 px-5 ">
        <form className="w-100" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="" className='py-4'>Enter your Email Address to Resest your Password</label>
            <input
              type="email"
              className="form-control"
              {...register("email", { required: true })}
              placeholder="Enter your email"
              required
            />
            {errors.email && <span className="text-danger">This field is required</span>}
          </div>
          <button type="submit" className="btn btn-warning" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>
        </div>
        {data && <p className="mt-3 text-success">Check your email for the reset link.</p>}
        {error && <p className="mt-3 text-danger">Failed to send reset link. Please try again.</p>}
      </div>
    </div>
  );
};

export default ForgotPassword;
