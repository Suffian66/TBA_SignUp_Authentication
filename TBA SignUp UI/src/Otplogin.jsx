import React from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useUserloginMutation } from './services/Login';

const Otplogin = () => {
  const [userlogin, { data, error, isLoading }] = useUserloginMutation; 

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
   
  });

  const onSubmit = async (formData) => {
      try {
        const updatedFormData = { ...formData};
  
        await userlogin(updatedFormData);
        console.log("login data sent", updatedFormData);
        
      } catch (err) {
        console.error("Failed to login:", err);
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

          <div className="form-group">
            <label className="mt-4" htmlFor="password">
              Enter your Password:
            </label>
            <input
              type="password"
              className="form-control text-muted"
              id="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-sm rounded-pill px-5 py-2 my-5 text-uppercase"
            // disabled={isLoading}
          >
            Sign In
          </button>

          <div className="text-end">
            <Link to="/forgetpassword">Forget Password</Link>
            <Link to="/signup" className="mx-4">
              Sign Up
            </Link>
          </div>
        </form>
        <div className="col"></div>
      </div>
    </div>
  )
}

export default Otplogin;
