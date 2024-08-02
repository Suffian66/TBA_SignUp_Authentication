import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { PersonFill } from "react-bootstrap-icons";
import { useGetStudentByIdQuery } from "../services/Studentlist";
import { useAddMapSponsorStudentMutation } from "../services/MapSponsor";
import { useState } from "react";
import { useGetCategoryDetailQuery } from "../services/LookUp";

function StudentProfile() {
  const { id: studentId } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const sponsorId = queryParams.get("sponsorId");
  const navigate = useNavigate();
  const { data, error, isLoading } = useGetStudentByIdQuery(studentId);
  const { data: categoryData } = useGetCategoryDetailQuery();

  const allCategoryDetails = categoryData?.$values || [];
  const donationFrequencies = allCategoryDetails.filter(item => item.description === "Donation Frequency");
  const donationChannels = allCategoryDetails.filter(item => item.description === "Donation Channel");
 
  const [formData, setFormData] = useState({
    donationAmount: "",
    donationFrequency: "Monthly",
    donationStartDate: "",
    donationChannel: "Cash",
    donationSourceAccount: "",
    donationDestinationAccount: "",
    notes: "",
    studentId: studentId,
    sponsorId: sponsorId,
  });
  const [addMapSponsorStudent, { isLoading: isAdding, isError, isSuccess }] = useAddMapSponsorStudentMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      donationAmount: formData.donationAmount,
      donationFrequency: formData.donationFrequency || "Default Frequency",
      donationStartDate: formData.donationStartDate,
      donationChannel: formData.donationChannel || "Default Channel",
      donationSourceAccount: formData.donationSourceAccount,
      donationDestinationAccount: formData.donationDestinationAccount,
      notes: formData.notes,
      studentId: formData.studentId,
      Id: formData.sponsorId,
    };

    try {
      const { data, error } = await addMapSponsorStudent(payload);

      if (data) {
        setFormData({
          donationAmount: "",
          donationFrequency: "",
          donationStartDate: "",
          donationChannel: "",
          donationSourceAccount: "",
          donationDestinationAccount: "",
          notes: "",
          studentId: studentId,
          sponsorId: sponsorId,
        });

        alert("Student is successfully added to sponsor");
        navigate(`/mapSponsorStudentList?sponsorId=${formData.sponsorId}`);
      }

      if (error && error.status === 400) {
        alert(error?.data?.message || 'Bad Request');
      }
    } 
    catch (error) {
      console.error("Error adding MapSponsorStudent:", error.message || error);
    }
  };

  // if (isLoading || frequencyIsLoading || channelIsLoading) return <div>Loading...</div>;
  // if (error || frequencyError || channelError) return <div>Error: {error.message}</div>;
  if (!data || Object.keys(data).length === 0) return <div>No student found</div>;

  const {
    firstName,
    middleName,
    lastName,
    gender,
    dob,
    gR_No,
    dateOfAdmission,
    lastClassAttended,
    dateOfSchoolLeaving,
    medicalNeeds,
    class: studentClass,
    language,
    residenceStatus,
    familyMemberName,
    familyRelation,
    personOccupation,
    personIncome,
    qualification,
    postalCode,

    state,
    city,
    country,
    address1,
    address2,
    addressType
    
  } = data;

  
  //   const getCategoryDetailsByTitle = (data, title) => {
  //   const categoryObject = categoryData?.$values.find((item) => item.title === title);
  //   return categoryObject?.lookupCategoryDetail?.$values || [];
  // };

  // const allCategoryDetails = categoryData.$values || [];
  // const donationFrequencies = allCategoryDetails.filter(item => item.description === "Donation Frequency");
  // const donationChannel = allCategoryDetails.filter(item => item.description === "Donation Channel");



  return (
    <>
      <div className="profilediv">
        <Row className="mb-3 mt-3">
          <Form.Group as={Col} className="myprofilehead ms-2">
            <Form.Label>
              <PersonFill size={40} className="ms-2" />
            </Form.Label>
            <Form.Label className="myprofiletxt ms-2">
              <h2>Student's Profile</h2>
            </Form.Label>
          </Form.Group>
        </Row>
        <div className="mt-2 mb-5 ps-3 pe-5">
          <h4 className="ms-2 textcolor">Personal Information</h4>
          <div className="row ms-2">
            <div className="col-3 divcolor fw-bold">G.R. No</div>
            <div className="col-3 divcolor">{gR_No}</div>
            <div className="col-3 divcolor fw-bold">Class</div>
            <div className="col-3 divcolor">{studentClass}</div>
          </div>
          <div className="row ms-2">
            <div className="col-3 divcolor fw-bold">First Name</div>
            <div className="col-3 divcolor">{firstName}</div>
            <div className="col-3 divcolor fw-bold">Middle Name</div>
            <div className="col-3 divcolor">{middleName}</div>
          </div>
          <div className="row ms-2">
            <div className="col-3 divcolor fw-bold">Last Name</div>
            <div className="col-3 divcolor">{lastName}</div>
            <div className="col-3 divcolor fw-bold">Gender</div>
            <div className="col-3 divcolor">{gender}</div>
          </div>
          <div className="row ms-2">
            <div className="col-3 divcolor fw-bold">Date of Birth</div>
            <div className="col-3 divcolor">{dob}</div>
            <div className="col-3 divcolor fw-bold">Date of Admission</div>
            <div className="col-3 divcolor">{dateOfAdmission}</div>
          </div>
          <div className="row ms-2">
            <div className="col-3 divcolor fw-bold">Last Class Attended</div>
            <div className="col-3 divcolor">{lastClassAttended}</div>
            <div className="col-3 divcolor fw-bold">Date of School Leaving</div>
            <div className="col-3 divcolor">{dateOfSchoolLeaving}</div>
          </div>
          <div className="row ms-2">
            <div className="col-3 divcolor fw-bold">Medical Needs</div>
            <div className="col-3 divcolor">{medicalNeeds}</div>
            <div className="col-3 divcolor fw-bold">Language</div>
            <div className="col-3 divcolor">{language}</div>
          </div>
          <div className="row ms-2">
            <div className="col-3 divcolor fw-bold">Residence Status</div>
            <div className="col-3 divcolor">{residenceStatus}</div>
            <div className='col-3 divcolor fw-bold'> Postal Code </div>
            <div className='col-3 divcolor'>{postalCode}</div>
          </div>
          <div className='row ms-2'>
                    <div className='col-3 divcolor fw-bold'>
                        Address 1
                    </div>
                    <div className='col-9 divcolor'>
                        {address1}
                    </div>
          </div>
          <div className='row ms-2'>
                    <div className='col-3 divcolor fw-bold'>
                        Address 2
                    </div>
                    <div className='col-9 divcolor'>
                        {address2}
                    </div>
         </div>
         <div className='row ms-2'>
                    <div className='col-3 divcolor fw-bold'>
                        Address Type
                    </div>
                    <div className='col-3 divcolor'>
                        {addressType}
                    </div>
                    <div className='col-3 divcolor fw-bold'>
                        State
                    </div>
                    <div className='col-3 divcolor'>
                        {state}
                    </div>
                </div>
                <div className='row ms-2'>
                    <div className='col-3 divcolor fw-bold'>
                        City
                    </div>
                    <div className='col-3 divcolor'>
                        {city}
                    </div>
                    <div className='col-3 divcolor fw-bold'>
                        Country
                    </div>
                    <div className='col-3 divcolor'>
                        {country}
                    </div>
                </div>
            </div>
      
      
    
        <div className="mt-2 mb-5 ps-3 pe-5">
          <h4 className="ms-2 textcolor">Family Details</h4>
          <div className="row ms-2 text-center">
      
            <div className="col-3 divcolor fw-bold">Name of Member</div>
            <div className="col-2 divcolor fw-bold">Relation</div>
            <div className="col-3 divcolor fw-bold">Occupation</div>
            <div className="col-2 divcolor fw-bold">Qualification</div>
            <div className="col-2 divcolor fw-bold">Income</div>
          </div>
         
            <div  className="row ms-2 text-center">
            
              <div className="col-3 divcolor">
                {familyMemberName || "NA"}
              </div>
              <div className="col-2 divcolor">
                {familyRelation}
              </div>
              <div className="col-3 divcolor">
                {personOccupation}
              </div>
              <div className="col-2 divcolor">
                {qualification}
              </div>
              <div className="col-2 divcolor">
                {personIncome}
              </div>
            </div>
            <div className="row mt-4 ms-2">
            <div className=" justify-content-end d-flex">
              <Link to={`/studentupdate/${studentId}`} className="btn btn-primary">
                Edit Profile
              </Link>
            </div>
          </div>
        </div>

        </div>
    <hr />
     
                        
      <div className="profilediv ms-2 mt-5 me-2">
        <form onSubmit={handleSubmit}>
          <h4 className="ms-2 mt-3 mb-4 textcolor">Add to Sponsorship</h4>
          <div className="row ms-2">
            <div className="col-3 divcolor fw-bold">Donation Amount</div>
            <div className="col-3 divcolor">
              <input
                type="number"
                name="donationAmount"
                value={formData.donationAmount}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="col-3 divcolor fw-bold">Donation Frequency</div>
            <div className="col-3 divcolor">
              <select
                name="donationFrequency"
                value={formData.donationFrequency}
                onChange={handleChange}
                className="form-control"
              >
                <option value="">Select Frequency</option>
                {donationFrequencies.map((item) => (
                  <option key={item.lookupValueId} value={item.title}>
                    {item.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
            <div className="row ms-2">
              <div className="col-3 divcolor fw-bold">Donation Start Date</div>
              <div className="col-3 divcolor">
                <input
                  type="date"
                  name="donationStartDate"
                  value={formData.donationStartDate}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="col-3 divcolor fw-bold">Donation Channel</div>
              <div className="col-3 divcolor">
                <select
                  name="donationChannel"
                  value={formData.donationChannel}
                  onChange={handleChange}
                  className="form-control"
                >
                  <option value="">Select Channel</option>
                  {donationChannels.map((item) => (
                    <option key={item.lookupValueId} value={item.title}>
                      {item.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row ms-2">
              <div className="col-3 divcolor fw-bold">Donation Source Account</div>
              <div className="col-3 divcolor">
                <input
                  type="text"
                  name="donationSourceAccount"
                  value={formData.donationSourceAccount}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="col-3 divcolor fw-bold">Donation Destination Account</div>
              <div className="col-3 divcolor">
                <input
                  type="text"
                  name="donationDestinationAccount"
                  value={formData.donationDestinationAccount}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            </div>
            <div className="row ms-2">
              <div className="col-3 divcolor fw-bold">Notes</div>
              <div className="col-9 divcolor">
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            </div>
            <div className="row float-start mt-5 ms-1">
              <div className="d-flex">
                <button className="btn btn-success me-2" type="submit">
                  Add Sponsorship
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
    </>
  );
}

export default StudentProfile;
