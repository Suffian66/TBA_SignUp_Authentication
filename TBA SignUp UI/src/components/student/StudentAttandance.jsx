import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Calendar from 'react-calendar';
import "react-calendar/dist/Calendar.css";
import { useGetClassListQuery, useGetStudentAttendanceQuery } from '../../services/api/Attendance';

const StudentAttendance = () => {
  // const [students, setStudents] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const studentsPerPage = 50;
  // const [selectAllPresent, setSelectAllPresent] = useState(false);
  // const [selectAllAbsent, setSelectAllAbsent] = useState(false);
  const [date, changeDate] = useState(new Date());
  const [attendanceDate, setAttendanceDate] = useState('');
  const [selectedClass, setSelectedClass] = useState("");
 
  // useEffect(() => {
    const handleDateChange = (date) => {
      if (date) {
        const formattedDate = date.toISOString().split('T')[0];
        setAttendanceDate(formattedDate);
      }
    };
  // }, [date]);
  const { data: studentData, isLoading, error } = useGetStudentAttendanceQuery({ classId: selectedClass, attendanceDate });
  const { data: classes, isError,  } = useGetClassListQuery();

  const classData = classes?.$values || []; 

  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
  };
  const selectedClassData = classData.find(classItem => classItem.title === selectedClass);
   useEffect(() => {
    console.log(classData);
    console.log(selectedClass, "Selected Class");
    
   }, [classData]);
  if (!studentData || Object.keys(studentData).length === 0) return <div>No student found</div>;

  const allStudentData = studentData?.$values || [];

  console.log(allStudentData);
  
  // useEffect(() => {
  //   if (studentData && Array.isArray(studentData)) {
  //     setStudents(studentData);
  //     console.log(studentData);
  //   } else {
  //     setStudents([]);
  //   }
  // }, [studentData]);

  // const handleToggleAttendance = (studentId, field) => {
  //   setStudents(prevStudents =>
  //     prevStudents.map(student => {
  //       if (student.studentId === studentId) {
  //         return {
  //           ...student,
  //           [field]: !student[field],
  //         };
  //       }
  //       return student;
  //     })
  //   );
  // };

  // const handleSelectAll = (field) => {
  //   const newValue = field === 'present' ? !selectAllPresent : !selectAllAbsent;
  //   setStudents(prevStudents =>
  //     prevStudents.map(student => ({
  //       ...student,
  //       [field]: newValue,
  //     }))
  //   );
  //   if (field === 'present') {
  //     setSelectAllPresent(newValue);
  //   } else {
  //     setSelectAllAbsent(newValue);
  //   }
  // };

  // const calculateAttendance = () => {
  //   const presentCount = students.filter(student => student.present).length;
  //   const absentCount = students.filter(student => student.absent || student.leave).length;
  //   return { presentCount, absentCount };
  // };

  // const { presentCount, absentCount } = calculateAttendance();

  // const sortedStudents = [...students].sort((a, b) => a.firstName.localeCompare(b.firstName));

  // const indexOfLastStudent = currentPage * studentsPerPage;
  // const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  // const currentStudents = sortedStudents.slice(indexOfFirstStudent, indexOfLastStudent);

  // const totalPages = Math.ceil(sortedStudents.length / studentsPerPage);


  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading classes</div>;

  return (
    <div className="profilediv">
      <div className="container mt-4">
        <div className="header mb-4">
          <h2>Student's Attendance</h2>
        </div>
        <div className="filters mb-4">
          <div className="row">
          <div className="col-md-2 ms-5 mb-3 mt-5">
          <label htmlFor="class" className="form-label">Class:</label>
          <select 
        id="class" 
        className="form-select" 
        value={selectedClass} 
        onChange={handleClassChange}
      >
        <option value="">Select Class</option>
        {classData && classData.map((classItem) => (
          <option key={classItem.lookUpCtgDetailId} value={classItem.lookUpCtgDetailId}>
            {classItem.title}
          </option>
        ))}
      </select>
      {selectedClassData && (
        <div>
          <p>Selected Class ID: {selectedClassData.lookUpCtgDetailId}</p>
          <p>Selected Class Title: {selectedClassData.title}</p>
        </div>
      )}</div>
         
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
                <th>GR_NO</th>
                <th>Student's Name</th>
                <th>
                  <input
                    type="checkbox"
                    // checked={selectAllPresent}
                    // onChange={() => handleSelectAll('present')}
                    className="form-check-input"
                  />
                  Present
                </th>
                <th>
                  <input
                    type="checkbox"
                    // checked={selectAllAbsent}
                    // onChange={() => handleSelectAll('absent')}
                    className="form-check-input"
                  />
                  Absent
                </th>
                <th>Leave</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              {allStudentData.map((student, index) => (
                <tr key={student.gr_No}>
                  <td>{ index + 1}</td>
                  <td>{student.gr_No}</td>
                  <td>{student.firstName} {student.lastName}</td>
                  <td>
                    <input
                      type="checkbox"
                      checked={student.present}
                      // onChange={() => handleToggleAttendance(student.gr_No, 'present')}
                      className="form-check-input"
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      checked={student.absent}
                      // onChange={() => handleToggleAttendance(student.gr_No, 'absent')}
                      className="form-check-input"
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      checked={student.leave}
                      // onChange={() => handleToggleAttendance(student.gr_No, 'leave')}
                      className="form-check-input"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={student.remarks || ''}
                      className='border-0 form-control'
                      // onChange={(e) =>
                      //   setStudents(prevStudents =>
                      //     prevStudents.map(s =>
                      //       s.gr_No === student.gr_No
                      //         ? { ...s, remarks: e.target.value }
                      //         : s
                      //     )
                      //   )
                      // }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* <div className="pagination"> */}
          {/* <nav>
            <ul className="pagination justify-content-center">
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)}>
                  Previous
                </button>
              </li>
              {[...Array(totalPages)].map((_, i) => (
                <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                  <button className="page-link" onClick={() => setCurrentPage(i + 1)}>
                    {i + 1}
                  </button>
                </li>
              ))}
              <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)}>
                  Next
                </button>
              </li>
            </ul>
          </nav> */}
        </div>
       
        <div className="attendance-summary row">
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body text-center">
                <div className="icon mb-2">🎓</div>
                {/* <div className="value h2">{students.length}</div> */}
                <div className="label">Total Students</div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body text-center">
                <div className="icon mb-2">✅</div>
                {/* <div className="value h2">{presentCount}</div> */}
                <div className="label">Present Today</div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body text-center">
                <div className="icon mb-2">😥</div>
                {/* <div className="value h2">{absentCount}</div> */}
                <div className="label">Absent Today</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default StudentAttendance;
