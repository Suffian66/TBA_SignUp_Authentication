import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {  useGetCategoryDetailQuery } from "./services/LookUp";
import { useAddAddressMutation } from "./services/Address";
import { useAddUserMutation } from "./services/SignUp";

const Address = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const {register,handleSubmit, formState: { errors }, } = useForm();
 
  const [addAddress] = useAddAddressMutation();
  const [addUser] = useAddUserMutation(); 

  const { formData } = state || {};

  const { data: countryData, error: countryError, isLoading: countryIsLoading } = useGetCategoryDetailQuery(["Country", ""]);
  const { data: addressTypeData, error: addressTypeError, isLoading: addressTypeIsLoading } = useGetCategoryDetailQuery(["Address Type", ""]);
   
  const getCategoryDetailsByTitle = (data, title) => {
    const categoryObject = data?.$values?.find((item) => item.title === title);
    return categoryObject?.lookupCategoryDetail?.$values || [];
  };

  const countryDetail = getCategoryDetailsByTitle(countryData, "Country");
  const addressTypeDetail = getCategoryDetailsByTitle(addressTypeData, "Address Type");

  const onSubmit = async (data) => {
    console.log("onSubmit called with formData:", formData);
    
    if (!formData || !formData.userId) {
      alert("No user data found");
      return;
    }

    try {
      // Prepare addressPayload with correct IDs
      const addressPayload = {
        addressTypeId: data.addressTypeId, // Ensure this is the correct ID
        addressPrimary: data.addressPrimary,
        address1: data.address1,
        address2: data.address2,
        countryId: data.countryId, // Ensure this is the correct ID
        city: data.city,
        state: data.state,
        postalCode: data.postalCode,
        userId: formData.userId, // Use userId from formData
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
      navigate("/registerandlogin"); // Navigate to a success page or another desired page
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
                               
                                {addressTypeDetail.map((address, index) => (
                                    <option key={index} value={address}>
                                        {address}
                                    </option>
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
                                {countryDetail.map((country, index) => (
                                    <option key={index} value={country}>
                                        {country}
                                    </option>
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

export default Address;
