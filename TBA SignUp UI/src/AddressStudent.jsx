import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useGetCategoryDetailQuery } from "./services/LookUp";
import { useAddStudentAddressMutation } from "./services/Address";
import { useCreateStudentMutation } from "./services/Studentlist";

const AddressStudent = () => {
  const location = useLocation();
  const { formData } = location.state;
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, } = useForm();

  const [addStudent] = useCreateStudentMutation();
  const [addAddress] = useAddStudentAddressMutation();

  const { data, error } = useGetCategoryDetailQuery();
  const allCategoryDetails = data?.$values || [];
  const addressTypeOptions = allCategoryDetails.filter(item => item.description === "Address Type");
  const countryOptions = allCategoryDetails.filter(item => item.description === "Country");

  const onSubmit = async (data) => {
    console.log("onSubmit called with formData:", formData);

    if (!formData) {
      alert("No student data found");
      return;
    }

    try {

      const studentResponse = await addStudent(formData).unwrap();
      console.log("Student added successfully:", studentResponse);

      const addressPayload = {
        addressTypeId: data.addressType,
        addressPrimary: data.addressPrimary,
        address1: data.address1,
        address2: data.address2,
        countryId: data.country,
        city: data.city,
        state: data.state,
        postalCode: data.postalCode,
        studentId: studentResponse.studentId, // Use studentId from userResponse
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
      navigate("/addstudent"); 
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
              <div className="col-lg-2"></div>
              <div className="col-lg-9">
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

export default AddressStudent;
