import { useAddUserMutation } from "./services/SignUp";
import { useForm } from "react-hook-form";

const Registerandlogin = () => {
  const [addUser, { data, error, isLoading }] = useAddUserMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
     
    },
  });

  const onSubmit = async (formData) => {
    try {
      const updatedFormData = { ...formData, roles: ["sponsor"] };

      await addUser(updatedFormData);
      console.log("User added successfully:", updatedFormData);
      
    } catch (err) {
      console.error("Failed to add user:", err);
    }
  };

  return (
    <>
      <section className="gradient-custom">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div
                className="card shadow-2-strong card-registration shadow-lg"
                style={{ borderRadius: "20px" }}
              >
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">
                    Registration Form
                  </h3>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                      <div className="col-md-12 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Username"
                            {...register("userName", { required: true })}
                          />
                          {errors.userName && <p>This field is required</p>}
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="First Name"
                          {...register("firstName", { required: true })}
                        />
                        {errors.firstName && <p>This field is required</p>}
                      </div>
                      <div className="col-6 mb-4">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Middle Name"
                          {...register("middleName")}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Last Name"
                          {...register("lastName", { required: true })}
                        />
                        {errors.lastName && <p>This field is required</p>}
                      </div>
                      <div className="col-md-6 mb-4">
                        <select
                          className="form-control form-control-lg"
                          {...register("gender", { required: true })}
                        >
                          <option value="">-----Select Gender-----</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                        {errors.gender && <p>This field is required</p>}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <input
                          type="email"
                          className="form-control form-control-lg"
                          placeholder="Email"
                          {...register("email", { required: true })}
                        />
                        {errors.email && <p>This field is required</p>}
                        <div className="mt-2">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Name Prefix - Dr/Mr/Ms"
                            {...register("namePrefix")}
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4 pb-2">
                        <label htmlFor="">Date Of Birth</label>
                        <input
                          type="date"
                          className="form-control form-control-lg"
                          {...register("dob", { required: true })}
                        />
                        {errors.dob && <p>This field is required</p>}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 mb-4">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="C.N.I.C"
                          {...register("cnic", { required: true })}
                        />
                        {errors.cnic && <p>This field is required</p>}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 mb-4">
                        <input
                          type="password"
                          className="form-control form-control-lg"
                          placeholder="Enter Your Password"
                          {...register("password", { required: true })}
                        />
                        {errors.password && <p>This field is required</p>}
                      </div>
                    </div>

                    <div className="mt-4 pt-2">
                      <button
                        className="btn btn-warning btn-lg"
                        type="submit"
                        disabled={isLoading}
                      >
                        {isLoading ? "Signing Up..." : "Sign Up"}
                      </button>
                      {error && <p>Failed to sign up. Please try again.</p>}
                    </div>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Registerandlogin;
