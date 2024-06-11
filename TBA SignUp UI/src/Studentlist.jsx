import { Table } from 'react-bootstrap';
// import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';
import { Cart } from 'react-bootstrap-icons';
import { useGetAllStudentsQuery } from './services/Studentlist';

const Studentlist = () => {
    const { data: students, error, isLoading } = useGetAllStudentsQuery();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

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
                        <div className='me-5'>
                            <Table striped bordered hover className='text-center tablefont'>
                                <thead>
                                    <tr style={{ height: '0px' }}>
                                        <th className='col-1'>S.No</th>
                                        <th className='col-2'>G.R #</th>
                                        <th className='col-4'>Student Name</th>
                                        <th className='col-4'>Father's Name</th>
                                        <th className='col-2'>Class</th>
                                        <th className='col-1'>Select</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {students?.map((student, index) => (
                                    <tr key={student.id} style={{ height: '40px' }}>
                                        <td>{index + 1}</td>
                                        <td>{student.gR_No}</td>
                                        <td>{student.studentName}</td>
                                        <td>{student.fatherName}</td>
                                        <td>{student.className}</td>
                                        <td>
                                            <input type="checkbox" className='form-check-input me-2' />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        <button className='btn btn-primary btnstudent btn-color'>Save</button>
                    </div>
                </div>
            </div>
        </div >
        </>
    );
}

export default Studentlist;