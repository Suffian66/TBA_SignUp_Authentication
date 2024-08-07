import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAddAddressMutation } from "../../services/api/Address";
import { useAddUserMutation } from "../../services/api/SignUp";
import { useCreateTeacherMutation } from "../../services/api/Teacher";
import { useGetCategoryDetailQuery } from "../../services/api/LookUp";

const TeacherAddress = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, } = useForm();
  const { formData } = state || {};

  const [addAddress] = useAddAddressMutation();
  const [addUser] = useAddUserMutation();
  const [addTeacher] = useCreateTeacherMutation();

  const { data } = useGetCategoryDetailQuery();
  const allCategoryDetails = data?.$values || [];
  const addressTypeOptions = allCategoryDetails.filter(item => item.description === "Address Type");
  const countryOptions = allCategoryDetails.filter(item => item.description === "Country");

  const onSubmit = async (data) => {
    console.log("onSubmit called with formData:", formData);

    if (!formData) {
      alert("No user data found");
      return;
    }

    try {
      // First, call the addUser API
      const userResponse = await addUser(formData).unwrap();
      console.log("User added successfully:", userResponse);

      const {Father_HusbandName, DegreeQualification, Certification, Salary} = formData;
      const teacherData = { Father_HusbandName, DegreeQualification, Certification, Salary, userId: userResponse.userId };
      console.log("Teacher data being sent:", teacherData)
      const teacherResponse = await addTeacher(teacherData).unwrap();
      console.log("Teacher added successfully:", teacherResponse);

      const addressPayload = {
        addressTypeId: data.addressType,
        addressPrimary: data.addressPrimary,
        address1: data.address1,
        address2: data.address2,
        countryId: data.country,
        city: data.city,
        state: data.state,
        postalCode: data.postalCode,
        Id: userResponse.userId, // Use userId from userResponse
        createdBy: 1,
        createdDate: new Date(),
        updatedBy: 1,
        updatedDate: new Date(),
        isActive: true
      };

      console.log("Address data being sent:", addressPayload);
      const addressResponse = await addAddress(addressPayload).unwrap();

      console.log("Address added successfully:", addressResponse);
      alert("Address added successfully");
      navigate("/teacherform1"); 
    } catch (err) {
      console.error("Failed to add address:", err);
      alert(`Failed to add address: ${err.message}`);
    }
  };


  return (
    <>
      <div>
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
                      Enter Your Address
                    </h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="row">
                        <div className="col-md-12 mb-4">
                          <div className="form-outline">
                            <select
                              className="form-control form-control-lg"
                              {...register("addressType", { required: true })}
                            >
                              <option value="">Select Address Type</option>

                              {addressTypeOptions.map((option, index) => (
                                <option key={index} value={option.lookUpCtgDetailId}>{option.title}</option>
                              ))}
                            </select>

                            {errors.addressType && (
                              <p>This field is required</p>
                            )}
                          </div>
                        </div>
                        <div className="col-md-12 mb-4">
                          <label className="form-check-label">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              {...register("addressPrimary")}
                            />
                            Address Primary
                          </label>
                        </div>
                        <div className="col-12 mb-4">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Address 1"
                            {...register("address1", { required: true })}
                          />
                          {errors.address1}
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12 mb-4">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Address 2"
                            {...register("address2")}
                          />
                          {errors.address2}
                        </div>
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <select
                              className="form-control form-control-lg"
                              {...register("country", { required: true })}
                            >
                              <option value="">-----Select Country-----</option>
                              {countryOptions.map((option, index) => (
                                <option key={index} value={option.lookUpCtgDetailId}>{option.title}</option>
                              ))}
                            </select>
                            {errors.country && <p>This field is required</p>}
                          </div>

                          <div className="col-md-6 mb-4 pb-2">
                            <input
                              type="text"
                              className="form-control form-control-lg"
                              placeholder="City"
                              {...register("city", { required: true })}
                            />
                            {errors.city && <p>This field is required</p>}
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6 mb-4">
                          <div className="">
                            <input
                              type="text"
                              className="form-control form-control-lg"
                              placeholder="State"
                              {...register("state", { required: true })}
                            />
                          </div>
                        </div>
                        <div className="col-6 mb-4">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Postal Code"
                            {...register("postalCode", { required: true })}
                          />
                          {errors.postalCode && <p>This field is required</p>}
                        </div>
                      </div>
                      <div className="mt-4 pt-2">
                        <button
                          className="btn btn-warning btn-lg"
                          type="submit"
                        >
                          Submit
                        </button>

                        {/* {errors && <p>Failed to sign up. Please try again.</p>} */}
                      </div>
                      <div className=" text-end">
                        <Link to="/">
                          <button className="btn btn-primary btn-lg">
                            Back
                          </button>
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TeacherAddress;
