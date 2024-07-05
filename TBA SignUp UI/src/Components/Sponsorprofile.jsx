import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link, useParams } from 'react-router-dom';
import { PersonFill } from 'react-bootstrap-icons';
import { useGetSponsorByIdQuery } from '../services/Sponsorlist';

function Sponsorprofile() {
    const { id } = useParams();
    const {data: sponsors, error, isLoading} = useGetSponsorByIdQuery(id);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!sponsors || Object.keys(sponsors).length === 0) return <div>No sponsor found</div>;
    
    return (
        <>
            <div className='profilediv'>    
            <Row className="mb-3 mt-3 ">
                <Form.Group as={Col} className='myprofilehead ms-2'>
                    <Form.Label><PersonFill size={40} className='ms-2' /></Form.Label>
                    <Form.Label className='myprofiletxt ms-2 '><h2>Sponsor's Profile ({sponsors.namePrefix} {sponsors.firstName})</h2></Form.Label>
                </Form.Group>
            </Row>
            
            <div className='mt-2 mb-5 ps-3 pe-5 dashboardbox profilebox'>
                <h4 className='ms-2 textcolor'>Personal Information</h4>
                <div key={sponsors.id} className='row ms-2'>
                    <div className='col-3 divcolor fw-bold'>
                        First/Middle Name
                    </div>
                    <div className='col-3 divcolor '>
                         {sponsors.firstName} {sponsors.middleName}
                    </div>
                    <div className='col-3 divcolor fw-bold'>
                        Last Name
                    </div>
                    <div className='col-3 divcolor'>
                       {sponsors.lastName}
                    </div>
                </div>
                <div className='row ms-2'>
                    <div className='col-3 divcolor fw-bold'>
                        Gender
                    </div>
                    <div className='col-3 divcolor '>
                        {sponsors.gender}
                    </div>
                    <div className='col-3 divcolor fw-bold'>
                        D.O.B
                    </div>
                    <div className='col-3 divcolor'>
                        {sponsors.dob}
                    </div>
                </div>
                <div className='row ms-2'>
                    <div className='col-3 divcolor fw-bold'>
                        CNIC 
                    </div>
                    <div className='col-3 divcolor'>
                        {sponsors.cnic} 
                    </div>
                    <div className='col-3 divcolor fw-bold'>
                        Occupation   
                    </div>
                    <div className='col-3 divcolor'>
                        {sponsors.occupation}
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
                    <Link to='/sponsorlist'><button className='btn btn-primary btnstudent btn-color me-2'>Back to Lists</button></Link>                        
                    <Link to={`/studentlist/${id}`}><button  className=' btn btn-primary btnstudent btn-color me-2'>Student List</button></Link>
                    <Link to={`/mapSponsorStudentList?sponsorId=${id}`}><button  className=' btn btn-primary btnstudent btn-color'>My Sponsor Cart</button></Link>
                
                </div>
            </div>
            </div>
        </>
    );
};

export default Sponsorprofile;