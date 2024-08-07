import 'bootstrap/dist/css/bootstrap.min.css';
import Calendar from 'react-calendar';
import "react-calendar/dist/Calendar.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useGetTeacherAttendanceQuery } from './services/TeacherAttendance';

const TeacherAttendance = () => {

  const [date, changeDate] = useState(new Date());
  const [attendanceDate, setAttendanceDate] = useState('');
  
 
  // useEffect(() => {
    const handleDateChange = (date) => {
      if (date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
      const day = String(date.getDate()).padStart(2, '0');
      const formattedDate = `${year}-${month}-${day}`;
      setAttendanceDate(formattedDate);
      }
    };
  // }, [date]);
  const { data: teacherData, isLoading, error } = useGetTeacherAttendanceQuery({attendanceDate });
 


  if (!teacherData || Object.keys(teacherData).length === 0) return <div>No Teacher found</div>;

  const allTeacherData = teacherData?.$values || [];

  console.log(allTeacherData);
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading classes</div>;

  return (
    <div className="profilediv">
      <div className="container mt-4">
        <div className="header mb-4">
          <h2>Teacher's Attendance</h2>
        </div>
        <div className="filters mb-4">
          <div className="row">
            <div className='col-md-8 ms-5 pb-3 d-flex align-items-end justify-content-end'>
              <Calendar onChange={handleDateChange} value={date} />
            </div>
          </div>
        </div>
        <div className="attendance-table mb-4">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Teacher's Name</th>
                <th>
                  Present
                </th>
                <th>
                  Absent
                </th>
                <th>Leave</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              {allTeacherData.map((teacher, index) => (
                <tr key={teacher.gr_No}>
                  <td>{ index + 1}</td>
                  <td>{teacher.firstName} {teacher.lastName}</td>
                  <td>
                    <input
                      type="checkbox"
                      checked={teacher.present}
                      className="form-check-input"
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      checked={teacher.absent}
                       className="form-check-input"
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      checked={teacher.leave}
                      className="form-check-input"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={teacher.remarks || ''}
                      className='border-0 form-control'/>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
       
        </div>
        <div className='d-flex justify-align-items-end justify-content-end me-4'>
          <Link to= '/update-attendance-teacher'>
       <button className='btn btn-danger my-3'
       >
        Update Attendance 
       </button>
       </Link>
        </div>
      </div>
  
  );
};

export default TeacherAttendance;
