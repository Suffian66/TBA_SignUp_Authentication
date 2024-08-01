import { Table } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { Cart } from 'react-bootstrap-icons';
import { useDeleteMapSponsorStudentMutation, useGetAllMapSponsorStudentsQuery } from './services/MapSponsorStudent';

const MapSponsorStudentList = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const sponsorId = queryParams.get('sponsorId');
    const { data: sponsorStudentsResponse, error, isLoading } = useGetAllMapSponsorStudentsQuery();
    const [deleteMapSponsor] = useDeleteMapSponsorStudentMutation();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message || 'An error occurred'}</div>;

    console.log('Sponsor ID:', sponsorId);
    console.log('Sponsor Students Data:', sponsorStudentsResponse);

    const sponsorStudents = sponsorStudentsResponse?.$values || [];

    // Filter students based on sponsorId
    const filteredStudents = sponsorId ? sponsorStudents.filter(student => student.id === sponsorId) : sponsorStudents;

    console.log('Filtered Students:', filteredStudents);

    if (!Array.isArray(sponsorStudents)) {
        return <div>No sponsor students available</div>;
    }

    const handleDelete = async (studentId) => {
        if (window.confirm("Are you sure you want to delete this sponsorship?")) {
            try {
                await deleteMapSponsor({studentId}).unwrap();
                alert('Student deleted successfully from your SponsorCart');
            } catch (error) {
                console.error('Failed to delete sponsorship:', error);
                alert('Failed to delete sponsorship');
            }
        }
    };

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
                            <Table bordered hover className='text-center tablefont'>
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
                                            <td>
                                            <div className='d-flex justify-content-center'>
                                                <Link to={`/updateSponsorCart/${student.studentId}/${sponsorId}`}>
                                                    <button className='btn btn-warning btn-sm lh-2 mt-3 me-1'>Edit</button>
                                                </Link>
                                                {/* <Link to=""> */}
                                                <button
                                                        className='btn btn-danger btn-sm lh-2 mt-3 me-1'
                                                        onClick={() => handleDelete(student.studentId)}
                                                    >Delete</button>
                                                {/* </Link> */}
                                                <Link to="/bank">
                                                    <button className='btn btn-primary btn-sm lh-2 mt-3'>Pay</button>
                                                </Link>
                                            </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                            <Link to={`/studentlist/${sponsorId ? sponsorId : ''}`}>
                                <button className='btn btn-primary btnstudent btn-color me-2'>Back to Student List</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MapSponsorStudentList;
