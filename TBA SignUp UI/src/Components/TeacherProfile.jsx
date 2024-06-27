import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link, useParams } from 'react-router-dom';
import { PersonFill } from 'react-bootstrap-icons';
import { Table } from 'react-bootstrap';
import { useGetStudentByIdQuery } from '../services/Studentlist';


function Studentprofile() {
    const { id } = useParams();
    const {data, error, isLoading} = useGetStudentByIdQuery(id);

   
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!data || Object.keys(data).length === 0) return <div>No student found</div>;

    // Extracting student details
    const { firstName, middleName, lastName, gender, dob, cnic, occupation, gR_No, dateOfAdmission, lastClassAttended, dateOfSchoolLeaving, medicalNeeds, className, studentFamilies } = data;

    // Extract family members from $values array
    const familyMembers = studentFamilies && studentFamilies.$values
        ? studentFamilies.$values
        : [];

    return (
        <>
            <Row className="mb-3 mt-3">
                <Form.Group as={Col} className='myprofilehead'>
                    <Form.Label><PersonFill size={40} className='ms-2' /></Form.Label>
                    <Form.Label className='myprofiletxt ms-2'><h2>Teacher's Profile</h2></Form.Label>
                </Form.Group>
            </Row>
            <div className='mt-2 mb-5 ps-3 pe-5'>
                <h4 className='ms-2 textcolor'>Personal Information</h4>
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
                {/* <div className='row ms-2'>
                    <div className='col-3 divcolor fw-bold'>
                        Contact No
                    </div>
                    <div className='col-3 divcolor'>
                         0300-2654121
                    </div>
                    <div className='col-3 divcolor fw-bold'>
                        Status
                    </div>
                    <div className='col-3 divcolor'>
                        Active
                    </div>
                </div> */}
                <div className='row ms-2'>
                    <div className='col-3 divcolor fw-bold'>
                        Address
                    </div>
                    <div className='col-9 divcolor'>

                    </div>
                </div>
                {/* <div className='row ms-2'>
                    <div className='col-3 divcolor fw-bold'>
                       
                    </div>
                    <div className='col-9 divcolor'>
                       
                    </div>
                </div> */}
            </div>

            {/* ............Family Info........ */}
            {familyMembers.length > 0 && (
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
                   
                  
                </div>

              
            </div>
            )}
              
            <hr />
          
            
            
        </>
    );
}

export default Studentprofile;