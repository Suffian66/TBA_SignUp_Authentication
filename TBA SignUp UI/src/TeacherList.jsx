import { Table } from 'react-bootstrap';
import { Cart } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { useGetTeacherListQuery } from './services/Teacher';


const TeacherList = () => {
  const { data: teachersArray, error, isLoading } = useGetTeacherListQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const teachers = teachersArray?.$values || [];

  return (
    <div>
      <div className="dashboardbody">
        <div className="row dashboardbox pt-5 pb-5">
          <div className="col-12 classlist">
            <div className="mb-3 mt-3">
              <div className="myprofilehead d-flex">
                <div>
                  <Cart size={40} className="" />
                </div>
                <span>
                  <div className="myprofiletxt ms-3">
                    <h2>Teacher List</h2>
                  </div>
                </span>
              </div>
            </div>
            <div className="me-5 table-div">
              <Table striped bordered hover className="text-center tablefont">
                <thead>
                  <tr>
                    <th className="col-1">S.No</th>
                    <th className="col-4" colSpan="3">Teacher Name</th>
                    <th className="col-3">Father's/Husband's Name</th>
                    <th className="col-1">Qualification</th>
                    <th className="col-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {teachers.map((teacher, index) => (
                    <tr key={teacher.teacherId} style={{ height: '40px' }}>
                      <td>{index + 1}</td>
                      <td colSpan="3">{`${teacher.user.firstName} ${teacher.user.lastName}`}</td>
                      <td>{teacher.father_HusbandName}</td>
                      <td>{teacher.degreeQualification}</td> 
                      <td>
                        <Link to={`/teacherprofile/${teacher.teacherId}`}>
                          <button className="btn btn-primary">Veiw Profile</button>
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
    </div>
  );
};

export default TeacherList;
