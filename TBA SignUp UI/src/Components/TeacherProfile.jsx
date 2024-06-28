import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link, useParams } from 'react-router-dom';
import { PersonFill } from 'react-bootstrap-icons';
import { useGetTeacherByIdQuery } from '../services/Teacher';


function TeacherProfile() {
    const { id } = useParams();
    const {data: teachers, error, isLoading} = useGetTeacherByIdQuery(id);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!teachers || Object.keys(teachers).length === 0) return <div>No Teacher found</div>;
    
    return (
        <>
            <Row className="mb-3 mt-3">
                <Form.Group as={Col} className='myprofilehead ms-2'>
                    <Form.Label><PersonFill size={40} className='ms-2' /></Form.Label>
                    <Form.Label className='myprofiletxt ms-2 '><h2>Teacher's Profile ({teachers?.result?.namePrefix} {teachers?.result?.firstName})</h2></Form.Label>
                </Form.Group>
            </Row>
            
            <div className='mt-2 mb-5 ps-3 pe-5'>
                <h4 className='ms-2 textcolor'>Personal Information</h4>
                <div key={teachers.id} className='row ms-2'>
                    <div className='col-3 divcolor fw-bold'>
                        First/Middle Name
                    </div>
                    <div className='col-3 divcolor '>
                         {teachers?.result?.firstName} {teachers?.result?.middleName}
                    </div>
                    <div className='col-3 divcolor fw-bold'>
                        Last Name
                    </div>
                    <div className='col-3 divcolor'>
                       {teachers?.result?.lastName}
                    </div>
                </div>
                <div className='row ms-2'>
                    <div className='col-3 divcolor fw-bold'>
                        Gender
                    </div>
                    <div className='col-3 divcolor '>
                        {teachers?.result?.gender}
                    </div>
                    <div className='col-3 divcolor fw-bold'>
                        D.O.B
                    </div>
                    <div className='col-3 divcolor'>
                        {teachers?.result?.dob}
                    </div>
                </div>
                <div className='row ms-2'>
                    <div className='col-3 divcolor fw-bold'>
                        CNIC 
                    </div>
                    <div className='col-3 divcolor'>
                        {teachers?.result?.cnic} 
                    </div>
                    <div className='col-3 divcolor fw-bold'>
                        Occupation   
                    </div>
                    <div className='col-3 divcolor'>
                        {teachers?.result?.occupation}
                    </div>
                </div>
                <div className='row ms-2'>
                    <div className='col-3 divcolor fw-bold'>
                        Father's Name 
                    </div>
                    <div className='col-3 divcolor'>
                        {teachers?.result?.father_HusbandName} 
                    </div>
                    <div className='col-3 divcolor fw-bold'>
                    DegreeQualification   
                    </div>
                    <div className='col-3 divcolor'>
                        {teachers?.result?.degreeQualification}
                    </div>
                </div>
                <div className='row ms-2'>
                    <div className='col-3 divcolor fw-bold'>
                    Certification
                    </div>
                    <div className='col-3 divcolor'>
                        {teachers?.result?.certification} 
                    </div>
                    <div className='col-3 divcolor fw-bold'>
                    Salary   
                    </div>
                    <div className='col-3 divcolor'>
                        {teachers?.result?.salary}
                    </div>
                </div>
                <div className='row ms-2'>
                    <div className='col-3 divcolor fw-bold'>
                        Address
                    </div>
                    <div className='col-9 divcolor'>
                        {/* Add address here */}
                    </div>
                </div>
            </div>

            <hr />
                         
            <div className='row float-start mt-5 ms-1'>
                <div className='d-flex'>
                    <Link to='/teacherlist'><button className='btn btn-primary btnstudent btn-color me-2'>Back to Lists</button></Link>                        
                    <Link to={`/studentlist/${id}`}><button  className=' btn btn-primary btnstudent btn-color'>Student List</button></Link>
                </div>
            </div>
        </>
    );
}

export default TeacherProfile;