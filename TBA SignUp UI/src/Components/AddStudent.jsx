import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useGetCategoryDetailQuery } from '../services/LookUp';

const AddStudent = () => {
  const navigate = useNavigate();
  const {register, handleSubmit, formState: { errors }, setValue} = useForm();
  const { data: dataGender } = useGetCategoryDetailQuery(["Gender", ""], {});
  const { data: dataLanguage } = useGetCategoryDetailQuery(["Language", ""], {});
  const { data: dataResidence } = useGetCategoryDetailQuery(["Residence Status", ""], {});
  const { data: dataClass } = useGetCategoryDetailQuery(["Class", ""], {});


  const categoryData = {
    gender: dataGender?.[0]?.lookupCategoryDetail || [],
    language: dataLanguage?.[0]?.lookupCategoryDetail || [],
    residenceStatus: dataResidence?.[0]?.lookupCategoryDetail || [],
    class: dataClass?.[0]?.lookupCategoryDetail || []
  };

  // Set default values for select inputs
  useEffect(() => {
    Object.keys(categoryData).forEach(key => {
      const values = categoryData[key];
      if (values.length > 0) {
        setValue(key, values[0]);
      }
    });
  }, [categoryData, setValue]);

  const onSubmit = (formData) => {
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
                        {...register("middleName", { required: true })}
                      />
                      {errors.lastName && <p>This field is required</p>}
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
                    </div>
                    <div className="col-md-6 mb-4">
                      <select
                        className="form-control form-control-lg"
                        {...register("gender", { required: true })}
                      >
                          {categoryData.gender.map((gender, index) => (
                            <option key={index} value={gender}>{gender}</option>
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
                        {...register("language", { required: true })}
                      >
                          {categoryData.language.map((language, index) => (
                            <option key={index} value={language}>{language}</option>
                          ))}
                    </select>
                      {errors.language && <p>This field is required</p>}
                    </div>
                    <div className="col-md-6 mb-4">
                    <label>Residence Status</label>
                      <select
                        className="form-control form-control-lg"
                        {...register("residenceStatus", { required: true })}
                      >
                          {categoryData.residenceStatus.map((residence, index) => (
                            <option key={index} value={residence}>{residence}</option>
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
                          {categoryData.class.map((classes, index) => (
                            <option key={index} value={classes}>{classes}</option>
                          ))}
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 mb-4">
                    <label>Admission in Class</label>
                    <select
                        className="form-control form-control-lg"
                        {...register("class", { required: true })}
                      >
                          {categoryData.class.map((classes, index) => (
                            <option key={index} value={classes}>{classes}</option>
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
