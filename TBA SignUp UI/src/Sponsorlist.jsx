import { Table } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { Cart } from 'react-bootstrap-icons';
import { useGetAllSponsorsQuery } from './services/Sponsorlist';

const Sponsorlist = () => {
    const { data: sponsors, error, isLoading } = useGetAllSponsorsQuery();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    console.log(sponsors);

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
                                        <th className='col-1'>Ser</th>
                                        <th className='col-1'>Prefix</th>
                                        <th className='col-1'>First Name</th>
                                        <th className='col-1'>Middle Name</th>
                                        <th className='col-1'>Last Name</th>
                                        <th className='col-1'>Gender</th>
                                        <th className='col-2'>DOB</th>
                                        <th className='col-1'>CNIC</th>
                                        <th className='col-2'>Occupation</th>
                                        <th className='col-2'>Action</th>

                                    </tr>
                                </thead>
                                <tbody>
                                {sponsors.map((sponsor, index) => (
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
                        {/* <button className='btn btn-primary btnstudent btn-color'>Save</button> */}
                    </div>
                </div>
            </div>
        </div >
        </>
    );
}

export default Sponsorlist;