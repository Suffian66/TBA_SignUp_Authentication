import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { PersonFill } from 'react-bootstrap-icons';
import { useGetStudentByIdQuery } from '../services/Studentlist';

import { useAddMapSponsorStudentMutation } from '../services/MapSponsor';
import { useState } from 'react';
import { useGetCategoryDetailQuery } from '../services/LookUp';


function Studentprofile() {
    const { id: studentId } = useParams();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const sponsorId = queryParams.get('sponsorId');
    const navigate = useNavigate();

    // const { id } = useParams();
    const {data, error, isLoading} = useGetStudentByIdQuery(studentId);
    const {data: dataFrequency, error: frequencyError, isLoading: frequencyIsLoading, } = useGetCategoryDetailQuery(["Donation Frequency", ""], {});
    const {data: dataChannel, error: channelError, isLoading: channelIsLoading, } = useGetCategoryDetailQuery(["Donation Channel", ""], {});
    console.log(dataFrequency, dataChannel); // Check the data structure
   
    const [formData, setFormData] = useState({
        donationAmount: '',
        donationFrequency: 'Monthly',
        donationStartDate: '',
        donationChannel: 'Cash',
        donationSourceAccount: '',
        donationDestinationAccount: '',
        notes: '',
        studentId: studentId, // Set studentId from URL params
        sponsorId: sponsorId // Set sponsorId from query params
    });

    const [addMapSponsorStudent, { isLoading: isAdding, isError, isSuccess }] = useAddMapSponsorStudentMutation();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const payload = {
            donationAmount: formData.donationAmount,
            donationFrequency: formData.donationFrequency || 'Default Frequency',
            donationStartDate: formData.donationStartDate,
            donationChannel: formData.donationChannel || 'Default Channel',
            donationSourceAccount: formData.donationSourceAccount,
            donationDestinationAccount: formData.donationDestinationAccount,
            notes: formData.notes,
            studentId: formData.studentId,
            Id: formData.sponsorId // Ensure Id is correctly mapped from sponsorId
        };
    
        try {
            const {data, error} = await addMapSponsorStudent(payload);

            console.log('MapSponsorStudent added:', data);
            console.log('MapSponsorStudent error:', error);
    
            if(data){

                // Reset form fields after successful submission
                setFormData({
                    donationAmount: '',
                    donationFrequency: '',
                    donationStartDate: '',
                    donationChannel: '',
                    donationSourceAccount: '',
                    donationDestinationAccount: '',
                    notes: '',
                    studentId: studentId,
                    sponsorId: sponsorId
                });
                
                alert('Student is successfully added to sponsor');
                navigate(`/sponsorprofile/${formData.sponsorId}`);
            }

            if(error.status === 400){
                alert(error?.data?.message);
            }
    
        } catch (error) {
            console.error('Error adding MapSponsorStudent:', error.message);
        }
    };    

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!data || Object.keys(data).length === 0) return <div>No student found</div>;

    // Extracting student details
    const { firstName, middleName, lastName, gender, dob, cnic, occupation, gR_No, dateOfAdmission, lastClassAttended, dateOfSchoolLeaving, medicalNeeds, className, studentFamilies } = data;

    // Extract family members from $values array
    // const familyMembers = studentFamilies && studentFamilies.$values ? studentFamilies.$values : [];
    // const donationFrequencies = dataFrequency && dataFrequency.$values ? dataFrequency.$values : [];
    // const donationChannel = dataChannel && dataChannel.$values ? dataChannel.$values : [];  
    
    return (
        <>
            <Row className="mb-3 mt-3">
                <Form.Group as={Col} className='myprofilehead ms-2'>
                    <Form.Label><PersonFill size={40} className='ms-2' /></Form.Label>
                    <Form.Label className='myprofiletxt ms-2 '><h2>Student's Profile</h2></Form.Label>
                </Form.Group>
            </Row>
            <div className='mt-2 mb-5 ps-3 pe-5'>
                <h4 className='ms-2 textcolor'>Personal Information</h4>
                <div className='row ms-2'>
                    <div className='col-3 divcolor fw-bold'>
                        G.R. No
                    </div>
                    <div className='col-3 divcolor '>
                        {gR_No}
                    </div>
                    <div className='col-3 divcolor fw-bold'>
                        Class
                    </div>
                    <div className='col-3 divcolor'>
                    {className}
                    </div>
                </div>
                <div className='row ms-2'>
                    <div className='col-3 divcolor fw-bold'>
                        First/Middle Name
                    </div>
                    <div className='col-3 divcolor '>
                    {firstName} {middleName}
                    </div>
                    <div className='col-3 divcolor fw-bold'>
                        Last Name
                    </div>
                    <div className='col-3 divcolor'>
                    {lastName}
                    </div>
                </div>
                <div className='row ms-2'>
                    <div className='col-3 divcolor fw-bold'>
                        D.O.B
                    </div>
                    <div className='col-3 divcolor'>
                         {dob}
                    </div>
                    {/* <div className='col-3 divcolor fw-bold'>
                        Age
                    </div>
                    <div className='col-3 divcolor '> */}
                    <div className='col-3 divcolor fw-bold'>
                         Date of Admission    
                    </div>
                    <div className='col-3 divcolor'>
                        {dateOfAdmission}
                    </div>
                </div>
                <div className='row ms-2'>
                    <div className='col-3 divcolor fw-bold'>
                         Date of School Leaving
                    </div>
                    <div className='col-3 divcolor '>
                         {dateOfSchoolLeaving}
                    </div>
                    <div className='col-3 divcolor fw-bold'>
                         Last Class Attended
                    </div>
                    <div className='col-3 divcolor'>
                         {lastClassAttended}
                    </div>
                </div>
                <div className='row ms-2'>
                    <div className='col-3 divcolor fw-bold'>
                          Gender
                    </div>
                    <div className='col-3 divcolor'>
                          {gender}
                    </div>
                    <div className='col-3 divcolor fw-bold'>
                         Any Medical Needs
                    </div>
                    <div className='col-3 divcolor'>
                         {medicalNeeds}
                    </div>
                </div>
                <div className='row ms-2'>
                    <div className='col-3 divcolor fw-bold'>
                        Address
                    </div>
                    <div className='col-9 divcolor'>

                    </div>
                </div>
            </div>

            {/* ............Family Info........ */}
            {studentFamilies.length > 0 && (
            <div className='mt-2 mb-5 ps-3 pe-5'>
                <h4 className='ms-2 textcolor'>Family Details</h4>
                <div className='row ms-2 text-center'>
                    <div className='col-1 divcolor fw-bold'>
                        S.No
                    </div>
                    <div className='col-4 divcolor fw-bold'>
                        Name of Member
                    </div>
                    <div className='col-2 divcolor fw-bold'>
                        Relation
                    </div>
                    <div className='col-3 divcolor fw-bold'>
                        Occupation
                    </div>
                    <div className='col-2 divcolor fw-bold'>
                        Income
                    </div>
                </div>

                {studentFamilies.map((familyMember, index) => (
                    <div key={index} className='row ms-2 text-center'>
                        <div className='col-1 divcolor '>
                            {index + 1}
                        </div>
                        <div className='col-4 divcolor '>
                            {familyMember.familyMemberName || 'NA'}
                        </div>
                        <div className='col-2 divcolor '>
                        {familyMember.familyRelation}
                        </div>
                        <div className='col-3 divcolor '>
                        {familyMember.personOccupation}
                        </div>
                        <div className='col-2 divcolor '>
                        {familyMember.personIncome}
                        </div>
                    </div>
                ))}
            </div>
            )}
                {/* ............Progress........ */}
            <hr />
            <div className='mt-2 mb-5 ps-3 pe-5 pb-2'>
                <h4 className='ms-2 mb-3 textcolor'>Donation Details</h4>
                <form onSubmit={handleSubmit}>
                    <div className='row text-center'>
                        <div className='col-3 ms-2'>
                            <select className='form-select'
                                name="donationFrequency"
                                // className='form-select'
                                value={formData.dataFrequency}
                                onChange={handleChange}
                                required>
                                {/* <option defaultValue>Donation Frequency</option> */} 
                                {dataFrequency.map((type) => (
                                  <option
                                    key={type.lookUpCtgDetailId}
                                    value={type.title}
                                  >
                                    {type.title}
                                  </option>
                                ))}                                
                            </select>
                        </div>
                        <div className='col-3 divcolor'>
                            <input type='number'
                                name="donationAmount"
                                value={formData.donationAmount}
                                onChange={handleChange}
                                className='form-control'
                                placeholder='Amount'
                                required />
                        </div>
                        <div className='col-1 divcolor mt-1'>
                            <label htmlFor="">Start Date</label>
                        </div>
                        <div className='col-2 divcolor'>
                            <input type='date'
                                name="donationStartDate"
                                value={formData.donationStartDate}
                                onChange={handleChange}
                                className='form-control'
                                required/>
                        </div>
                        <div className='col-2 divcolor'>
                            <select name="donationChannel"
                                className='form-select'
                                value={formData.dataChannel}
                                onChange={handleChange}
                                required >
                                {/* <option defaultValue>Donation Channel</option> */}
                                {dataChannel.map((type) => (
                                  <option
                                    key={type.lookUpCtgDetailId}
                                    value={type.title}
                                  >
                                    {type.title}
                                  </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className='row mt-4 text-center'>
                        <div className='col-3 divcolor ms-2'>
                            <input
                                    type='text'
                                    name="donationSourceAccount"
                                    value={formData.donationSourceAccount}
                                    onChange={handleChange}
                                    className='form-control'
                                    placeholder='Source Account'
                                    required
                                />
                        </div>
                        <div className='col-3 divcolor'>
                        <input
                                type='text'
                                name="donationDestinationAccount"
                                value={formData.donationDestinationAccount}
                                onChange={handleChange}
                                className='form-control'
                                placeholder='Destination Account'
                                required
                            />
                        </div>
                        <div className='col-5 divcolor'>
                        <textarea
                                name="notes"
                                value={formData.notes}
                                onChange={handleChange}
                                className='form-control'
                                placeholder='Notes'
                            />
                        </div>
                        
                    </div>                  

                <div className='row float-start mt-5 ms-1'>
                    <div className='d-flex'>
                        <Link to={`/studentlist/${sponsorId ? `${sponsorId}` : ''}`}><button className='btn btn-primary btnstudent btn-color me-2'>Back to Lists</button></Link>                                                
                        <button type='submit' className=' btn btn-primary btnstudent btn-color'>Add to Sponsor</button>          
                    </div>
                </div>
                </form>
            </div>
         
            
        </>
    );
};

export default Studentprofile;