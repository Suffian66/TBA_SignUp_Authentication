import React from 'react';
import { Table } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { Cart } from 'react-bootstrap-icons';
import { useGetStudentsByClassNameQuery } from './services/ClassList';

const ClassWiseStudentList = () => {
    const {id: sponsorId} = useParams();
    const { className } = useParams();
    console.log('className', className);
    const { data: studentsArray, error, isLoading } = useGetStudentsByClassNameQuery(className);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    console.log(studentsArray);
    const students = studentsArray && studentsArray.$values ? studentsArray.$values : [];

    return (
        <>
            <div className="dashboardbody">
                <div className="row dashboardbox pt-5 pb-5">
                    <div className="col-12 classlist">
                        <div className="mb-3 mt-3">
                            <div className='myprofilehead d-flex'>
                                <div><Cart size={40} className='' /></div>
                                <span><div className='myprofiletxt ms-3'><h2>Student List Of  {className} </h2></div></span>
                            </div>
                        </div>
                        <div className='me-5 table-div'>
                            <Table striped bordered hover className='text-center tablefont'>
                                <thead>
                                    <tr>
                                        <th className='col-1'>S.No</th>
                                        <th className='col-1'>G.R #</th>
                                        <th className='col-3'>First Name</th>
                                        <th className='col-3'>Last Name</th>
                                        <th className='col-1'>Class</th>
                                        <th className='col-2'>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {students.map((student, index) => (
                                        <tr key={index} style={{ height: '40px' }}>
                                            <td>{index + 1}</td>
                                            <td>{student.gR_No}</td>
                                            <td>{student.firstName}</td>
                                            <td>{student.lastName}</td>
                                            <td>{student.class}</td>
                                            <td>
                                                <Link to={`/studentprofile/${student.studentId}?sponsorId=${sponsorId}`}>
                                                    <button className='btn btn-primary'>View Full Profile</button>
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

export default ClassWiseStudentList;
