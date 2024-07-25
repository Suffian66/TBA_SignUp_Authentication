import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useGetCategoryDetailQuery } from '../services/LookUp';

const AddStudent = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState();  

  const {register, handleSubmit, formState: { errors }, setValue} = useForm();
  
  const { data, error } = useGetCategoryDetailQuery();
  
  const allCategoryDetails = data?.$values || [];
  const residenceStatusDetails = allCategoryDetails.filter(item => item.description === "Residence");
  const genderDetails = allCategoryDetails.filter(item => item.description === "Gender");
  const languageDetails = allCategoryDetails.filter(item => item.description === "Language");
  const classDetails = allCategoryDetails.filter(item => item.description === "Class");

  const onSubmit = async (data) => {
    const formData = { ...data, roles: ["student"] };
    console.log("Navigating with state:", formData);
    navigate('/studentfamily', { state: { studentData: formData } });
   
  };

  return (
    <section className="gradient-custom">
      <div className="container py-5 h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-lg-10 studentform">
            <div className="card shadow-2-strong card-registration shadow-lg" style={{ borderRadius: "20px" }}>
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Student Registration</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="First Name"
                          {...register("firstName", { required: true })}
                        />
                        {errors.firstName && <p>This field is required</p>}
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Middle Name"
                        {...register("middleName")}
                      />
                      {/* {errors.middleName && <p>This field is required</p>} */}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Last Name"
                        {...register("lastName")}
                      />
                      {errors.lastName && <p>This field is required</p>}
                    </div>
                    <div className="col-md-6 mb-4">
                      <select
                        className="form-control form-control-lg"
                        {...register("genderId", { required: true })}
                      >
                          {genderDetails.map((option, index) => (
                            <option key={index} value={option.lookUpCtgDetailId}>{option.title}</option>
                          ))}
                      </select>
                      {errors.gender && <p>This field is required</p>}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <label>Date Of Birth</label>
                      <input
                        type="date"
                        className="form-control form-control-lg"
                        {...register("dob", { required: true })}
                      />
                      {errors.dob && <p>This field is required</p>}
                    </div>
                    <div className="col-md-6 mb-4 mt-4">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="G.R.No"
                        {...register("gR_No", { required: true })}
                      />
                      {errors.gR_No && <p>This field is required</p>}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                    <label>Language</label>
                    <select
                        className="form-control form-control-lg"
                        {...register("languageId", { required: true })}
                      >
                          {languageDetails.map((option, index) => (
                            <option key={index} value={option.lookUpCtgDetailId}>{option.title}</option>
                          ))}
                    </select>
                      {errors.language && <p>This field is required</p>}
                    </div>
                    <div className="col-md-6 mb-4">
                    <label>Residence Status</label>
                      <select
                        className="form-control form-control-lg"
                        {...register("residenceId", { required: true })}
                      >
                          {residenceStatusDetails.map((option, index) => (
                            <option key={index} value={option.lookUpCtgDetailId}>{option.title}</option>
                          ))}
                      </select>
                      {errors.residenceStatus && <p>This field is required</p>}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <label>Date Of Admission</label>
                      <input
                        type="date"
                        className="form-control form-control-lg"
                        {...register("dateOfAdmission", { required: true })}
                      />
                      {errors.dateOfAdmission && <p>This field is required</p>}
                    </div>
                    <div className="col-md-6 mb-4">
                      <label>Date Of School Leaving</label>
                      <input
                        type="date"
                        className="form-control form-control-lg"
                        {...register("dateOfSchoolLeaving")}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6 mb-4 mt-4">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Medical Needs"
                        {...register("medicalNeeds")}
                      />
                    </div>
                    <div className="col-6 mb-4">
                    <label>Last Class Attended</label>
                      <select
                        className="form-control form-control-lg"
                        {...register("lastClassAttended", { required: true })}
                        
                      >
                          {classDetails.map((option, index) => (
                            <option key={index} value={option.lookUpCtgDetailId}>{option.title}</option>
                          ))}
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 mb-4">
                    <label>Admission in Class</label>
                    <select
                        className="form-control form-control-lg"
                        {...register("classId", { required: true })}
                      >
                          {classDetails.map((option, index) => (
                            <option key={index} value={option.lookUpCtgDetailId}>{option.title}</option>
                          ))}
                      </select>
                      {errors.className && <p>This field is required</p>}
                    </div>
                  </div>
                  <div className="mt-4 pt-2">
                    <Link to="/">
                      <button className="btn btn-primary btn-lg" type="submit" >
                        Back
                      </button>
                    </Link>
                    <button className="btn btn-primary btn-lg float-end" type="submit" >
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
  );
};

export default AddStudent;
