import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useGetStudentByIdQuery, useUpdateStudentMutation } from "../../services/Studentlist";
import { useGetCategoryDetailQuery } from "../../services/LookUp";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function StudentUpdate() {
  const { id: studentId } = useParams();
  const navigate = useNavigate();
  const { data: studentData, error, isLoading } = useGetStudentByIdQuery(studentId);
  const [updateStudent, { isLoading: isUpdating }] = useUpdateStudentMutation();

  const { data: categoryData } = useGetCategoryDetailQuery();
  const allCategoryDetails = categoryData?.$values || [];
  const genderDetail = allCategoryDetails.filter(item => item.description === "Gender");
  const countryDetail = allCategoryDetails.filter(item => item.description === "Country");
  const addressTypeDetail = allCategoryDetails.filter(item => item.description === "Address Type");

  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    if (studentData) {
      Object.keys(studentData).forEach(key => {
        setValue(key, studentData[key] || "");
      });
    }
  }, [studentData, setValue]);

  const onSubmit = async (data) => {
    try {
      // Manually construct the payload
      const payload = {
        $id: studentData.$id || "1",  // Ensure $id is first
        studentId,
        ...data,
        dateOfAdmission: new Date(data.dateOfAdmission).toISOString(),
        dateOfSchoolLeaving: new Date(data.dateOfSchoolLeaving).toISOString(),
        personIncome: parseFloat(data.personIncome),
      };

      await updateStudent(payload).unwrap();
      alert("Student profile updated successfully.");
      navigate(`/studentprofile/${studentId}`);
    } catch (error) {
      alert("Failed to update student profile. Please try again.");
    }
  };



  if (isLoading) return <div>Loading...</div>;
  if (!studentData || Object.keys(studentData).length === 0) return <div>No student found</div>;

  return (
    <div className="mt-2 mb-5 ps-3 pe-5">
      <h2>Edit Student Profile</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row ms-2">
          <div className="col-3 divcolor fw-bold">G.R. No</div>
          <div className="col-3 divcolor">
            <input
              type="text"
              name="gR_No"
              {...register("gR_No")}
              className="form-control"
            />
          </div>
          <div className="col-3 divcolor fw-bold">Class</div>
          <div className="col-3 divcolor">
            <input
              type="text"
              name="studentClass"
              {...register("class")}
              className="form-control"
            />
          </div>
        </div>
        <div className="row ms-2">
          <div className="col-3 divcolor fw-bold">First Name</div>
          <div className="col-3 divcolor">
            <input
              type="text"
              name="firstName"
              {...register("firstName")}
              className="form-control"
            />
          </div>
          <div className="col-3 divcolor fw-bold">Middle Name</div>
          <div className="col-3 divcolor">
            <input
              type="text"
              name="middleName"
              {...register("middleName")}
              className="form-control"
            />
          </div>
        </div>
        <div className="row ms-2">
          <div className="col-3 divcolor fw-bold">Last Name</div>
          <div className="col-3 divcolor">
            <input
              type="text"
              name="lastName"
              {...register("lastName")}
              className="form-control"
            />
          </div>
          <div className="col-3 divcolor fw-bold">Gender</div>
          <div className="col-3 divcolor">
            <select
              name="gender"
              {...register("gender")}
              className="form-control"
            >
              <option value="">Select Gender</option>
              {genderDetail.map((item, index) => (
                <option key={index} value={item.title}>
                  {item.title}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="row ms-2">
          <div className="col-3 divcolor fw-bold">Date of Birth</div>
          <div className="col-3 divcolor">
            <input
              type="date"
              name="dob"
              {...register("dob")}
              className="form-control"
            />
          </div>
          <div className="col-3 divcolor fw-bold">Date of Admission</div>
          <div className="col-3 divcolor">
            <input
              type="date"
              name="dateOfAdmission"
              {...register("dateOfAdmission")}
              className="form-control"
            />
          </div>
        </div>
        <div className="row ms-2">
          <div className="col-3 divcolor fw-bold">Last Class Attended</div>
          <div className="col-3 divcolor">
            <input
              type="text"
              name="lastClassAttended"
              {...register("lastClassAttended")}
              className="form-control"
            />
          </div>
          <div className="col-3 divcolor fw-bold">Date of School Leaving</div>
          <div className="col-3 divcolor">
            <input
              type="date"
              name="dateOfSchoolLeaving"
              {...register("dateOfSchoolLeaving")}
              className="form-control"
            />
          </div>
        </div>
        <div className="row ms-2">
          <div className="col-3 divcolor fw-bold">Medical Needs</div>
          <div className="col-3 divcolor">
            <input
              type="text"
              name="medicalNeeds"
              {...register("medicalNeeds")}
              className="form-control"
            />
          </div>
          <div className="col-3 divcolor fw-bold">Language</div>
          <div className="col-3 divcolor">
            <input
              type="text"
              name="language"
              {...register("language")}
              className="form-control"
            />
          </div>
        </div>
        <div className="row ms-2">
          <div className="col-3 divcolor fw-bold">Residence Status</div>
          <div className="col-3 divcolor">
            <select
              name="residenceStatus"
              {...register("residenceStatus")}
              className="form-control"
            >
              <option value="">Select Address Type</option>
              {addressTypeDetail.map((item, index) => (
                <option key={index} value={item.title}>
                  {item.title}
                </option>
              ))}
            </select>
          </div>
          <div className="col-3 divcolor fw-bold">Country</div>
          <div className="col-3 divcolor">
            <select
              name="country"
              {...register("country")}
              className="form-control"
            >
              <option value="">Select Country</option>
              {countryDetail.map((item, index) => (
                <option key={index} value={item.title}>
                  {item.title}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="row ms-2">
          <div className="col-3 divcolor fw-bold">Family Member Name</div>
          <div className="col-3 divcolor">
            <input
              type="text"
              name="familyMemberName"
              {...register("familyMemberName")}
              className="form-control"
            />
          </div>
          <div className="col-3 divcolor fw-bold">Family Relation</div>
          <div className="col-3 divcolor">
            <input
              type="text"
              name="familyRelation"
              {...register("familyRelation")}
              className="form-control"
            />
          </div>
        </div>
        <div className="row ms-2">
          <div className="col-3 divcolor fw-bold">Qualification</div>
          <div className="col-3 divcolor">
            <input
              type="text"
              name="qualification"
              {...register("qualification")}
              className="form-control"
            />
          </div>
          <div className="col-3 divcolor fw-bold">Occupation</div>
          <div className="col-3 divcolor">
            <input
              type="text"
              name="personOccupation"
              {...register("personOccupation")}
              className="form-control"
            />
          </div>
        </div>
        <div className="row ms-2">
          <div className="col-3 divcolor fw-bold">Income</div>
          <div className="col-3 divcolor">
            <input
              type="text"
              name="personIncome"
              {...register("personIncome")}
              className="form-control"
            />
          </div>
          <div className="col-3 divcolor fw-bold">Postal Code</div>
          <div className="col-3 divcolor">
            <input
              type="text"
              name="postalCode"
              {...register("postalCode")}
              className="form-control"
            />
          </div>
        </div>
        <div className="row ms-2">
          <div className="col-3 divcolor fw-bold">Address1</div>
          <div className="col-3 divcolor">
            <input
              type="text"
              name="address1"
              {...register("address1")}
              className="form-control"
            />
          </div>
          <div className="col-3 divcolor fw-bold">Address2</div>
          <div className="col-3 divcolor">
            <input
              type="text"
              name="address2"
              {...register("address2")}
              className="form-control"
            />
          </div>
        </div>
        <div className="row ms-2">
          <div className="col-3 divcolor fw-bold">AddressType</div>
          <div className="col-3 divcolor">
            <input
              type="text"
              name="addressType"
              {...register("addressType")}
              className="form-control"
            />
          </div>
          {/* <div className="col-3 divcolor fw-bold">City</div> */}
          {/* <div className="col-3 divcolor">
            <input
              type="text"
              name="city"
              {...register("city")}
              className="form-control"
            />
          </div> */}
        </div>
        <div className="row ms-2">
          <div className="col-3 divcolor fw-bold">State</div>
          <div className="col-3 divcolor">
            <input
              type="text"
              name="state"
              {...register("state")}
              className="form-control"
            />
          </div>
          <div className="col-3 divcolor fw-bold">City</div>
          <div className="col-3 divcolor">
            <input
              type="text"
              name="city"
              {...register("city")}
              className="form-control"
            />
          </div>
        </div>
        <div className="row float-start mt-5 ms-1">
          <div className="d-flex">
            <button className="btn btn-success me-2" type="submit" disabled={isUpdating}>
              {isUpdating ? "Saving..." : "Save Changes"}
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => navigate(-1)}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default StudentUpdate;
