import { useState } from "react";
import { useForgotPasswordMutation } from "./services/ForgotPassword";


const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [forgotPassword, { isLoading, isSuccess, isError }] =
  useForgotPasswordMutation();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await forgotPassword({ email }).unwrap();
      alert("Password reset link has been sent to your email.");
    } catch (error) {
      console.error("Failed to send password reset link: ", error);
      alert("Failed to send password reset link.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Sending..." : "Send Reset Link"}
        </button>
      </form>
      {isSuccess && <p>Check your email for the reset link.</p>}
      {isError && <p>Failed to send reset link. Please try again.</p>}
    </div>
  );
};

export default ForgotPassword;
