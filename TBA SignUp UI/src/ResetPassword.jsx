import { useForm } from "react-hook-form";
import { useResetPasswordMutation } from "./services/ResetPassword";

const ResetPassword = ({ token }) => {
  const [resetPassword, { error, isLoading }] = useResetPasswordMutation();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    try {
      await resetPassword({ token, ...formData }).unwrap();
      alert("Password has been reset successfully.");
    } catch (err) {
      console.error("Failed to reset password: ", err);
      alert("Failed to reset password. Please try again.");
    }
  };

  return (
    <div className="w-50 mx-5 my-5">
    <div className="card shadow py-5 my-5 text-center">
      <h2>Reset Password</h2>
      <form className="w-100 " onSubmit={handleSubmit(onSubmit)}>
        <div className="my-2">
        
          <input
            type="password"
            placeholder="New Password"
            {...register("password", { required: true })}
          />
          {errors.password && <span>Password is required</span>}
        </div>
        <div className="my-2">
         
          <input
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword", { required: true })}
          />
          {errors.confirmPassword && <span>Confirm Password is required</span>}
        </div>
        <button type="submit" className="btn btn-warning" disabled={isLoading}>
          Reset Password
        </button>
      </form>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
    </div>
    </div>
  );
};

export default ResetPassword;
