import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
  useGetCategoryDetailQuery,
  useGetCountriesQuery,
} from "./services/LookUp";
import { useAddAddressMutation } from "./services/Address";

const Address = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {
    data: countries,
    error: countriesError,
    isLoading: countriesLoading,
  } = useGetCountriesQuery();
  const {
    data: categoryDetails,
    error: categoryDetailError,
    isLoading: categoryDetailLoading,
  } = useGetCategoryDetailQuery(["address"], {});
  const [
    addAddress,
    { isLoading: isAdding, isError: isAddError, error: addAddressError },
  ] = useAddAddressMutation();

  if (countriesLoading || categoryDetailLoading) return <div>Loading...</div>;
  if (countriesError) return <div>Error fetching countries</div>;
  if (categoryDetailError)
    return <div>Error fetching categories: {categoryDetailError.message}</div>;

  const onSubmit = async (formData) => {
    try {
      const updatedFormData = {
        ...formData,
        createdBy: 1,
        createdDate: new Date(),
        updatedBy: 1,
        updatedDate: new Date(),
        isActive: true,
      };
      await addAddress(updatedFormData).unwrap();
      alert("Address added successfully");
    } catch (err) {
      console.error("Failed to add address:", err);
      alert("Failed to add address:", err.message);
    }
  };

  const renderCategoryOptions = (categories) => {
    if (!Array.isArray(categories)) return null;
    return categories.map((category) => (
      <option key={category} value={category}>
        {category}
      </option>
    ));
  };

  const renderCountryOptions = (countries) => {
    if (!Array.isArray(countries)) return null;
    return countries.map((country, index) => (
      <option key={index} value={country?.title}>
        {country?.title}
      </option>
    ));
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
                              {Array.isArray(categoryDetails) &&
                                categoryDetails.map((type) => (
                                  <option
                                    key={type.lookUpCtgDetailId}
                                    value={type.title}
                                  >
                                    {type.title}
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
                              {Array.isArray(countries) &&
                                countries.map((country, index) => (
                                  <option key={index} value={country?.title}>
                                    {country?.title}
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
                          disabled={isLoading}
                        >
                          {isLoading ? "Signing Up..." : "Sign Up"}
                        </button>

                        {error && <p>Failed to sign up. Please try again.</p>}
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
