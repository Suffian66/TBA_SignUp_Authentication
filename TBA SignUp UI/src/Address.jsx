

import { useForm } from "react-hook-form";
import { useAddAddressMutation } from "./services/Address";

const Address = () => {
  const [addaddress, {  error, isLoading }] = useAddAddressMutation();

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

      await addaddress(updatedFormData);
      console.log("User added successfully:", updatedFormData);
      alert("User added successfully:", updatedFormData);
      // window.location.reload();
      // Navigate('/signin')

      
    } catch (err) {
      console.error("Failed to add user:", err);
      alert("Failed to add user:", err)
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
                    Address Form
                  </h3>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                      <div className="col-md-12 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Address Type"
                            {...register("addressType", { required: true })}
                          />
                          {errors.addressType && <p>This field is required</p>}
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Address Primary"
                          {...register("addressPrimary", { required: true })}
                        />
                        {errors.addressPrimary && <p>This field is required</p>}
                      </div>
                      <div className="col-6 mb-4">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Address 1"
                          {...register("address1",{required: true})}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Address 2"
                          {...register("address2")}
                        />
                        {errors.address2}
                      </div>
                      <div className="col-md-6 mb-4">
                        <select
                          className="form-control form-control-lg"
                          {...register("country", { required: true })}
                        >
                          <option value="">-----Select Country-----</option>
                    
                        </select>
                        {errors.country && <p>This field is required</p>}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="City"
                          {...register("city", { required: true })}
                        />
                        {errors.city && <p>This field is required</p>}
                        <div className="mt-2">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="State"
                            {...register("state", { required: true })}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 mb-4">
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

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
   
   </div>
    </>

  )
}


export default Address
