
import { useForm } from 'react-hook-form';
import {  useNavigate } from 'react-router-dom';
import { useUserlogin2FAMutation } from '../services/api/Otplogin';


const Otplogin = () => {
  const [userlogin2FA, { isLoading }] = useUserlogin2FAMutation();
  const navigate = useNavigate();

  const { handleSubmit, register, setError, formState: { errors } } = useForm();

  const onSubmit = async (formData) => {
    try {
      const response = await userlogin2FA(formData);

      if (response && response.data) {
        console.log("OTP verification successful, logging in");
        localStorage.setItem('token', response.data.token);
        navigate('/dashboard'); // Redirect to a protected route
      } else {
        // Handle the error response from the API
        if (response.error && response.error.data && response.error.data.errors) {
          const apiErrors = response.error.data.errors;
          for (const field in apiErrors) {
            setError(field.toLowerCase(), { type: 'manual', message: apiErrors[field].join(', ') });
          }
        } else {
          console.error("OTP verification failed");
          alert("OTP verification failed. Please try again.");
        }
      }
    } catch (err) {
      console.error("Failed to verify OTP:", err);
      alert("Failed to verify OTP. Please try again.");
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
            <label className="mt-4" htmlFor="code">
              Enter your OTP Code:
            </label>
            <input
              type="text"
              className="form-control text-muted"
              id="code"
              placeholder="OTP"
              {...register("code", { required: "OTP code is required" })}
            />
            {errors.code && <p className="text-danger">{errors.code.message}</p>}
          </div>

          <div className="form-group">
            <label className="mt-4" htmlFor="email">
              Enter your Email
            </label>
            <input
              type="email"
              className="form-control text-muted"
              id="email"
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.Email && <p className="text-danger">{errors.Email.message}</p>}
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-sm rounded-pill px-5 py-2 my-5 text-uppercase"
            disabled={isLoading}
          >
            Verify OTP
          </button>
        </form>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default Otplogin;
