import { useNavigate } from "react-router-dom";
import { useAddUserMutation } from "./services/SignUp";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Registerandlogin = () => {
  const [formData, setFormData] = useState();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
     
    },
  });

  const onSubmit = (data) => {
    const formData = { ...data, roles: ["sponsor"] };
    console.log("Navigating with state:", formData);
    navigate("/address", { state: { formData }}); // Passing state to Address component
  };
  
  return (
    <>
      <section className="gradient-custom">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className=" col-lg-10 studentform">
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
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Occupation"
                          {...register("occupation", { required: true })}
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
                        className="btn btn-primary btn-lg"
                        type="submit"
                       
                      >
                      Next
                      </button>
                      
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
