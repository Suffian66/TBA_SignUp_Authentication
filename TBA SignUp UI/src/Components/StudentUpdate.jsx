import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetStudentByIdQuery, useUpdateStudentMutation } from "../services/Studentlist";
import { useGetCategoryDetailQuery } from "../services/LookUp";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function StudentUpdate() {
  const { id: studentId } = useParams();
  const navigate = useNavigate();
  const { data, error, isLoading } = useGetStudentByIdQuery(studentId);
  const [updateStudent, { isLoading: isUpdating }] = useUpdateStudentMutation();
  const [studentEditData, setStudentEditData] = useState({});

  const { data: genderData, error: genderError, isLoading: genderIsLoading } = useGetCategoryDetailQuery(["Gender", ""]);
  const { data: countryData, error: countryError, isLoading: countryIsLoading } = useGetCategoryDetailQuery(["Country", ""]);
  const { data: addressTypeData, error: addressTypeError, isLoading: addressTypeIsLoading } = useGetCategoryDetailQuery(["Address Type", ""]);

  const getCategoryDetailsByTitle = (data, title) => {
    const categoryObject = data?.$values?.find((item) => item.title === title);
    return categoryObject?.lookupCategoryDetail?.$values || [];
  };

  const genderDetail = getCategoryDetailsByTitle(genderData, "Gender");
  const countryDetail = getCategoryDetailsByTitle(countryData, "Country");
  const addressTypeDetail = getCategoryDetailsByTitle(addressTypeData, "Address Type");

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setStudentEditData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = { ...studentEditData, id: studentId };
      const { data, error } = await updateStudent(payload);

      if (error) {
        console.error("Error updating student profile:", error.message);
        alert("Failed to update student profile. Please try again.");
        return;
      }

      alert("Student profile updated successfully.");
      navigate(`/studentprofile/${studentId}`);
    } catch (error) {
      console.error("Error updating student profile:", error.message);
      alert("Failed to update student profile. Please try again.");
    }
  };

  useEffect(() => {
    if (data) {
      setStudentEditData({
        gR_No: data.gR_No || "",
        studentClass: data.class || "",
        firstName: data.firstName || "",
        middleName: data.middleName || "",
        lastName: data.lastName || "",
        gender: data.gender || "",
        dob: data.dob || "",
        dateOfAdmission: data.dateOfAdmission || "",
        lastClassAttended: data.lastClassAttended || "",
        dateOfSchoolLeaving: data.dateOfSchoolLeaving || "",
        medicalNeeds: data.medicalNeeds || "",
        language: data.language || "",
        residenceStatus: data.residenceStatus || "",
        country: data.country || "",
        familyMemberName: data.familyMemberName || "",
        familyRelation: data.familyRelation || "",
        qualification: data.qualification || "",
        personOccupation: data.personOccupation || "",
        personIncome: data.personIncome || ""
      });
    }
  }, [data]);

  if (isLoading || genderIsLoading || countryIsLoading || addressTypeIsLoading) return <div>Loading...</div>;
  if (error || genderError || countryError || addressTypeError) return <div>Error: {error.message}</div>;
  if (!data || Object.keys(data).length === 0) return <div>No student found</div>;

  return (
    <div className="mt-2 mb-5 ps-3 pe-5">
      <h2>Edit Student Profile</h2>
      <form onSubmit={handleEditSubmit}>
        <div className="row ms-2">
          <div className="col-3 divcolor fw-bold">G.R. No</div>
          <div className="col-3 divcolor">
            <input
              type="text"
              name="gR_No"
              defaultValue={studentEditData.gR_No}
              onChange={handleEditChange}
              className="form-control"
            />
          </div>
          <div className="col-3 divcolor fw-bold">Class</div>
          <div className="col-3 divcolor">
            <input
              type="text"
              name="studentClass"
              defaultValue={studentEditData.studentClass}
              onChange={handleEditChange}
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
              defaultValue={studentEditData.firstName}
              onChange={handleEditChange}
              className="form-control"
            />
          </div>
          <div className="col-3 divcolor fw-bold">Middle Name</div>
          <div className="col-3 divcolor">
            <input
              type="text"
              name="middleName"
              defaultValue={studentEditData.middleName}
              onChange={handleEditChange}
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
              defaultValue={studentEditData.lastName}
              onChange={handleEditChange}
              className="form-control"
            />
          </div>
          <div className="col-3 divcolor fw-bold">Gender</div>
          <div className="col-3 divcolor">
            <select
              name="gender"
              value={studentEditData.gender}
              onChange={handleEditChange}
              className="form-control"
            >
              <option value="">Select Gender</option>
              {genderDetail.map((item, index) => (
                <option key={index} value={item}>
                  {item}
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
              defaultValue={studentEditData.dob}
              onChange={handleEditChange}
              className="form-control"
            />
          </div>
          <div className="col-3 divcolor fw-bold">Date of Admission</div>
          <div className="col-3 divcolor">
            <input
              type="date"
              name="dateOfAdmission"
              defaultValue={studentEditData.dateOfAdmission}
              onChange={handleEditChange}
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
              defaultValue={studentEditData.lastClassAttended}
              onChange={handleEditChange}
              className="form-control"
            />
          </div>
          <div className="col-3 divcolor fw-bold">Date of School Leaving</div>
          <div className="col-3 divcolor">
            <input
              type="date"
              name="dateOfSchoolLeaving"
              defaultValue={studentEditData.dateOfSchoolLeaving}
              onChange={handleEditChange}
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
              defaultValue={studentEditData.medicalNeeds}
              onChange={handleEditChange}
              className="form-control"
            />
          </div>
          <div className="col-3 divcolor fw-bold">Language</div>
          <div className="col-3 divcolor">
            <input
              type="text"
              name="language"
              defaultValue={studentEditData.language}
              onChange={handleEditChange}
              className="form-control"
            />
          </div>
        </div>
        <div className="row ms-2">
          <div className="col-3 divcolor fw-bold">Residence Status</div>
          <div className="col-3 divcolor">
            <select
              name="residenceStatus"
              value={studentEditData.residenceStatus}
              onChange={handleEditChange}
              className="form-control"
            >
              <option value="">Select Address Type</option>
              {addressTypeDetail.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="col-3 divcolor fw-bold">Country</div>
          <div className="col-3 divcolor">
            <select
              name="country"
              value={studentEditData.country}
              onChange={handleEditChange}
              className="form-control"
            >
              <option value="">Select Country</option>
              {countryDetail.map((item, index) => (
                <option key={index} value={item}>
                  {item}
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
              defaultValue={studentEditData.familyMemberName}
              onChange={handleEditChange}
              className="form-control"
            />
          </div>
          <div className="col-3 divcolor fw-bold">Family Relation</div>
          <div className="col-3 divcolor">
            <input
              type="text"
              name="familyRelation"
              defaultValue={studentEditData.familyRelation}
              onChange={handleEditChange}
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
              defaultValue={studentEditData.qualification}
              onChange={handleEditChange}
              className="form-control"
            />
          </div>
          <div className="col-3 divcolor fw-bold">Occupation</div>
          <div className="col-3 divcolor">
            <input
              type="text"
              name="personOccupation"
              defaultValue={studentEditData.personOccupation}
              onChange={handleEditChange}
              className="form-control"
            />
          </div>
        </div>
        <div className="row ms-2">
          <div className="col-3 divcolor fw-bold">Income</div>
          <div className="col-3 divcolor">
            <input
              type="number"
              name="personIncome"
              defaultValue={studentEditData.personIncome}
              onChange={handleEditChange}
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
