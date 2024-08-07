import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Cart } from 'react-bootstrap-icons';
import { useGetAllSponsorsQuery } from '../../services/Sponsorlist';
import { useGetTeacherListQuery } from '../../services/Teacher';

const Sponsorlist = () => {
    const { data: sponsorsResponse, error: sponsorError, isLoading: sponsorLoading } = useGetAllSponsorsQuery();
    const { data: teachersResponse, error: teacherError, isLoading: teacherLoading } = useGetTeacherListQuery();

    if (sponsorLoading || teacherLoading) return <div>Loading...</div>;
    if (sponsorError) return <div>Error: {sponsorError.message || 'An error occurred'}</div>;
    if (teacherError) return <div>Error: {teacherError.message || 'An error occurred'}</div>;

    const sponsors = sponsorsResponse?.$values || [];
    const teachers = teachersResponse?.$values || [];

    // Extract userIds of teachers
    const teacherIds = new Set(teachers.map(teacher => teacher.userId));

    // Filter sponsors to exclude those who are also teachers
    const filteredSponsors = sponsors.filter(sponsor => !teacherIds.has(sponsor.id));

    if (filteredSponsors.length === 0) {
        return <div>No sponsors available</div>;
    }


    return (
        <>
            <div className="dashboardbody">
                <div className="row dashboardbox pt-5 pb-5">
                    <div className="col-12 classlist">
                        <div className="mb-3 mt-3">
                            <div className='myprofilehead d-flex'>
                                <div><Cart size={40} className='' /></div>
                                <span><div className='myprofiletxt ms-3'><h2>List of Sponsors</h2></div></span>
                            </div>
                        </div>
                        <div className='me-5 table-div'>
                            <Table striped bordered hover className='text-center tablefont' >
                                <thead>
                                    <tr>
                                        <th style={{ width: '5%' }}>Ser</th>
                                        <th style={{ width: '5%' }}>Prefix</th>
                                        <th style={{ width: '10%' }}>First Name</th>
                                        <th style={{ width: '10%' }}>Middle Name</th>
                                        <th style={{ width: '10%' }}>Last Name</th>
                                        <th style={{ width: '5%' }}>Gender</th>
                                        <th style={{ width: '10%' }}>DOB</th>
                                        <th style={{ width: '15%' }}>CNIC</th>
                                        <th style={{ width: '20%' }}>Occupation</th>
                                        <th style={{ width: '10%' }}>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredSponsors.map((sponsor, index) => (
                                        <tr key={sponsor.id} style={{ height: '40px' }}>
                                            <td>{index + 1}</td>
                                            <td>{sponsor.namePrefix}</td>
                                            <td>{sponsor.firstName}</td>
                                            <td>{sponsor.middleName}</td>
                                            <td>{sponsor.lastName}</td>
                                            <td>{sponsor.gender}</td>
                                            <td>{sponsor.dob}</td>
                                            <td>{sponsor.cnic}</td>
                                            <td>{sponsor.occupation}</td>
                                            <td>
                                                <Link to={`/sponsorprofile/${sponsor.id}`}>
                                                    <button className='btn btn-primary'>Profile</button>
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sponsorlist;
