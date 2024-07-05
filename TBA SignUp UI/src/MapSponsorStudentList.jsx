import { Table } from 'react-bootstrap';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Cart } from 'react-bootstrap-icons';
import { useGetAllMapSponsorStudentsQuery } from './services/MapSponsorStudent';

const MapSponsorStudentList = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const sponsorId = queryParams.get('sponsorId');
    const { data: sponsorStudents, error, isLoading } = useGetAllMapSponsorStudentsQuery();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    console.log('Sponsor ID:', sponsorId);
    console.log('Sponsor Students Data:', sponsorStudents)

        const filteredStudents = sponsorId
        ? sponsorStudents.filter(student => student.id === sponsorId)
        : sponsorStudents;

    console.log('Filtered Students:', filteredStudents);

    return (
        <>
             <div className="dashboardbody">
                <div className="row dashboardbox pt-5 pb-5">
                    <div className="col-12 classlist">
                        <div className="mb-3 mt-3">
                            <div className='myprofilehead d-flex'>
                                <div><Cart size={40} className='' /></div>
                                <span><div className='myprofiletxt ms-3'><h2>My Sponsor Cart</h2></div></span>
                            </div>
                        </div>
                        <div className='me-5 table-div'>
                            <Table bordered hover className='text-center tablefont' >
                                <thead>
                                    <tr>
                                        <th className='col-1'>S.No</th>
                                        <th className='col-1'>G.R.No </th>
                                        <th className='col-1'>First Name</th>
                                        {/* <th className='col-1'>Last Name</th> */}
                                        <th className='col-1'>Class</th>
                                        <th className='col-1'>Don. Amount</th>
                                        <th className='col-1'>Frequency</th>
                                        <th className='col-1'>Channel</th>
                                        <th className='col-1'>Starting Date</th>
                                        <th className='col-1'>Source Acct.</th>
                                        <th className='col-1'>Destination Acct</th>
                                        <th className='col-2'>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {filteredStudents.map((student, index) => (
                                    <tr key={index} style={{ height: '40px' }}>
                                        <td>{index + 1}</td>
                                        <td>{student.gR_No}</td>
                                        <td>{student.firstName}</td>
                                        {/* <td>{student.lastName}</td> */}
                                        <td>{student.class}</td>
                                        <td>{student.donationAmount}</td>
                                        <td>{student.donationFrequency}</td>
                                        <td>{student.donationChannel}</td>
                                        <td>{student.donationStartDate}</td>
                                        <td>{student.donationSourceAccount}</td>
                                        <td>{student.donationDestinationAccount}</td>
                                        <Link>
                                            <button className='btn btn-primary btn-sm lh-2 mt-3'>Click to Pay</button>
                                        </Link>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        {/* <div className='row float-start mt-5 ms-1'>
                            <div className='d-flex'> */}
                                {/* <Link to={`/sponsorprofile/${sponsorId ? `${sponsorId}` : ''}`}><button className='btn btn-primary btnstudent btn-color me-3 '>Back to Profile</button></Link> */}
                                <Link to={`/studentlist/${sponsorId ? `${sponsorId}` : ''}`}> <button className='btn btn-primary btnstudent btn-color me-2'>Back to Student List</button></Link>
                            {/* </div>        
                        </div> */}
                    </div>
                </div>
            </div>
        </div >
        </>
    );
}

export default MapSponsorStudentList;