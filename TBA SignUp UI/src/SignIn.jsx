import React from 'react'
import { useUserloginMutation } from './services/Login';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

// const SignIn = () => {
//   const [userlogin, { data, error, isLoading }] = useUserloginMutation(); 
//   const navigate = useNavigate();

//   const {handleSubmit, register, formState: { errors }} = useForm({
   
//   });

//   const onSubmit = async (formData) => {
//       try {
//         const updatedFormData = { ...formData};
//         const response = await userlogin(updatedFormData);
//         console.log("Full response from backend:", response);

//         if (response && response.data.isSuccess) {
//           console.log("Login successful, OTP sent");
//           navigate('/otplogin'); // Redirect to the OTP login page
//           alert("Login Successful. Enter your OTP sent to your email.");
//         } else {
//           console.error("Login failed or OTP not sent");
          
//         }
//       } catch (err) {
//         console.error("Failed to login:", err);
//         alert("Incorrect Email or Password. Please enter correct credentials!");
//       }
//   }; 

const SignIn = () => {
  const [userlogin, { data, error, isLoading }] = useUserloginMutation(); 
  const navigate = useNavigate();

  const { handleSubmit, register, formState: { errors } } = useForm();

  const onSubmit = async (formData) => {
    try {
      const response = await userlogin(formData);
      console.log("Full response from backend:", response);

      if (response && response.data.token) {
        console.log("Login successful");
        // Store the token and expiration in localStorage or a context/state management library
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('tokenExpiration', response.data.expiration);
        // Redirect to the dashboard or home page after successful login
        navigate('/dashboard'); 
        alert("Login Successful.");
      } else {
        console.error("Login failed");
        alert("Login failed. Please check your credentials.");
      }
    } catch (err) {
      console.error("Failed to login:", err);
      alert("Incorrect Email or Password. Please enter correct credentials!");
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
            disabled={isLoading}
          >
            Sign In
          </button>

          <div className="text-end">
            <Link to="/forgot-password">Forget Password</Link>
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

export default SignIn;
