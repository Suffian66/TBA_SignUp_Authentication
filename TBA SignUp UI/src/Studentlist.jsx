import { Table } from 'react-bootstrap';
// import Sidebar from '../components/Sidebar';
import { Link, useParams } from 'react-router-dom';
import { Cart } from 'react-bootstrap-icons';
import { useGetAllStudentsQuery, useGetStudentByIdQuery } from './services/Studentlist';

const Studentlist = () => {
    const { data: studentsArray, error, isLoading } = useGetAllStudentsQuery();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    const students = studentsArray?.$values || []; 

    return (
        <>
             <div className="dashboardbody">
                <div className="row dashboardbox pt-5 pb-5">
                    <div className="col-12 classlist">
                        <div className="mb-3 mt-3">
                            <div className='myprofilehead d-flex'>
                                <div><Cart size={40} className='' /></div>
                                <span><div className='myprofiletxt ms-3'><h2>My Student List</h2></div></span>
                            </div>
                        </div>
                        <div className='me-5 table-div'>
                            <Table striped bordered hover className='text-center tablefont' >
                                <thead>
                                    <tr>
                                        <th className='col-1'>S.No</th>
                                        <th className='col-1'>G.R #</th>
                                        <th className='col-4' colSpan="3">Student Name</th>
                                        {/* <th className='col-3'>Father's Name</th> */}
                                        <th className='col-1'>Class</th>
                                        <th className='col-2'>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {students.map((student, index) => (
                                    <tr key={student.id} style={{ height: '40px' }}>
                                        <td>{index + 1}</td>
                                        <td>{student.gR_No}</td>
                                        <td>{student.firstName}</td>
                                        <td>{student.middleName}</td>
                                        <td>{student.lastName}</td>
                                        {/* <td>{student.fatherName}</td> */}
                                        <td>{student.className}</td>
                                        <Link to={`/studentprofile/${student.studentId}`}>
                                                <button className='btn btn-primary'>View Profile</button>
                                        </Link>
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

export default Studentlist;