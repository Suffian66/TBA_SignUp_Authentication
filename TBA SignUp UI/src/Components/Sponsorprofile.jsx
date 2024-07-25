import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link, useParams } from 'react-router-dom';
import { PersonFill } from 'react-bootstrap-icons';
import { useGetSponsorByIdQuery } from '../services/Sponsorlist';
import { useGetAddressByIdQuery } from '../services/Address';
import { useGetCategoryDetailQuery } from '../services/LookUp';

function Sponsorprofile() {
    const { id: sponsorId } = useParams();
    const { data: sponsors, error: sponsorError, isLoading: sponsorLoading } = useGetSponsorByIdQuery(sponsorId);

    if (sponsorLoading) return <div>Loading...</div>;
    if (sponsorError) return <div>Error: {error.message}</div>;
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
                <div key={sponsors.sponsorId} className='row ms-2'>
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
                        Address 1
                    </div>
                    <div className='col-9 divcolor'>
                        {sponsors.address1}
                    </div>
                </div>

                <div className='row ms-2'>
                    <div className='col-3 divcolor fw-bold'>
                        Address 2
                    </div>
                    <div className='col-3 divcolor'>
                        {sponsors.address2}
                    </div>
                    <div className='col-3 divcolor fw-bold'>
                        Postal Code
                    </div>
                    <div className='col-3 divcolor'>
                        {sponsors.postalCode}
                    </div>
                </div>

                <div className='row ms-2'>
                    <div className='col-3 divcolor fw-bold'>
                        Address Type
                    </div>
                    <div className='col-3 divcolor'>
                        {sponsors.addressType}
                    </div>
                    <div className='col-3 divcolor fw-bold'>
                        State
                    </div>
                    <div className='col-3 divcolor'>
                        {sponsors.state}
                    </div>
                </div>

                <div className='row ms-2'>
                    <div className='col-3 divcolor fw-bold'>
                        City
                    </div>
                    <div className='col-3 divcolor'>
                        {sponsors.city}
                    </div>
                    <div className='col-3 divcolor fw-bold'>
                        Country
                    </div>
                    <div className='col-3 divcolor'>
                        {sponsors.country}
                    </div>
                </div>
            </div>
            <Link to='/sponsorupdate'><button className='btn btn-primary ms-3 btn-color'>Update Profile</button></Link>
            <hr />
                         
            <div className='row float-start mt-5 ms-1'>
                <div className='d-flex'>
                    <Link to='/sponsorlist'><button className='btn btn-primary btnstudent btn-color me-2'>Back to Lists</button></Link>                        
                    <Link to={`/studentlist/${sponsorId}`}><button  className=' btn btn-primary btnstudent btn-color me-2'>Student List</button></Link>
                    <Link to={`/mapSponsorStudentList?sponsorId=${sponsorId}`}><button  className=' btn btn-primary btnstudent btn-color'>My Sponsor Cart</button></Link>
                </div>
            </div>
            </div>
        </>
    );
};

export default Sponsorprofile;