import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Calendar from 'react-calendar';
import "react-calendar/dist/Calendar.css";

const StudentAttendance = () => {
  const [students, setStudents] = useState([
    { gr_no: 1001, name: 'Savannah Nguyen', present: true, absent: false, leave: false, note: 'Note' },
    { gr_no: 1002, name: 'Brooklyn Simmons', present: true, absent: false, leave: false, note: 'Note' },
    { gr_no: 1003, name: 'Darrell Steward', present: false, absent: true, leave: false, note: 'Note' },
    { gr_no: 1004, name: 'Marvin McKinney', present: true, absent: false, leave: false, note: 'Note' },
    { gr_no: 1005, name: 'Cameron Williamson', present: true, absent: false, leave: false, note: 'Note' },
    { gr_no: 1006, name: 'Cody Fisher', present: true, absent: false, leave: false, note: 'Note' },
    { gr_no: 1007, name: 'Suffian', present: true, absent: false, leave: false, note: 'Bad student' },
    { gr_no: 1008, name: 'John Doe', present: false, absent: true, leave: false, note: 'Note' },
    { gr_no: 1009, name: 'Jane Doe', present: true, absent: false, leave: false, note: 'Note' },
    { gr_no: 1010, name: 'Mike Smith', present: false, absent: false, leave: true, note: 'Note' },
    { gr_no: 1011, name: 'Lisa Johnson', present: true, absent: false, leave: false, note: 'Note' },
    { gr_no: 1012, name: 'Chris Evans', present: false, absent: true, leave: false, note: 'Note' },
    { gr_no: 1013, name: 'Robert Brown', present: true, absent: false, leave: false, note: 'Note' },
    { gr_no: 1014, name: 'Emily Davis', present: false, absent: true, leave: false, note: 'Note' },
    { gr_no: 1015, name: 'David Wilson', present: true, absent: false, leave: false, note: 'Note' },
    { gr_no: 1016, name: 'Sarah Taylor', present: false, absent: false, leave: true, note: 'Note' },
    { gr_no: 1017, name: 'Paul Martinez', present: true, absent: false, leave: false, note: 'Note' },
    { gr_no: 1018, name: 'Laura Hernandez', present: false, absent: true, leave: false, note: 'Note' },
    { gr_no: 1019, name: 'Steve White', present: true, absent: false, leave: false, note: 'Note' },
    { gr_no: 1020, name: 'Megan Moore', present: false, absent: true, leave: false, note: 'Note' },
    { gr_no: 1021, name: 'Aaron Clark', present: true, absent: false, leave: false, note: 'Note' },
    { gr_no: 1022, name: 'Jessica Rodriguez', present: false, absent: false, leave: true, note: 'Note' },
    { gr_no: 1023, name: 'Brian Lewis', present: true, absent: false, leave: false, note: 'Note' },
    { gr_no: 1024, name: 'Sophia Walker', present: false, absent: true, leave: false, note: 'Note' },
    { gr_no: 1025, name: 'Daniel Hall', present: true, absent: false, leave: false, note: 'Note' },
    { gr_no: 1026, name: 'Olivia Allen', present: false, absent: true, leave: false, note: 'Note' },
    { gr_no: 1027, name: 'Ethan Young', present: true, absent: false, leave: false, note: 'Note' },
    { gr_no: 1028, name: 'Ava King', present: false, absent: false, leave: true, note: 'Note' },
    { gr_no: 1029, name: 'Mason Wright', present: true, absent: false, leave: false, note: 'Note' },
    { gr_no: 1030, name: 'Isabella Scott', present: false, absent: true, leave: false, note: 'Note' },
    { gr_no: 1031, name: 'James Green', present: true, absent: false, leave: false, note: 'Note' },
    { gr_no: 1032, name: 'Mia Adams', present: false, absent: true, leave: false, note: 'Note' },
    { gr_no: 1033, name: 'Logan Baker', present: true, absent: false, leave: false, note: 'Note' },
    { gr_no: 1034, name: 'Ella Campbell', present: false, absent: true, leave: false, note: 'Note' },
    { gr_no: 1035, name: 'Jackson Mitchell', present: true, absent: false, leave: false, note: 'Note' },
    { gr_no: 1036, name: 'Grace Perez', present: false, absent: false, leave: true, note: 'Note' },
    { gr_no: 1037, name: 'klaus miklesons', present: true, absent: false, leave: false, note: 'Note' },
    { gr_no: 1038, name: 'Lily Turner', present: false, absent: true, leave: false, note: 'Note' },
    { gr_no: 1039, name: 'Lucas Parker', present: true, absent: false, leave: false, note: 'Note' },
    { gr_no: 1040, name: 'Harper Phillips', present: false, absent: true, leave: false, note: 'Note' },
    { gr_no: 1041, name: 'Benjamin Evans', present: true, absent: false, leave: false, note: 'Note' },
    { gr_no: 1042, name: 'Ella Edwards', present: false, absent: false, leave: true, note: 'Note' },
    { gr_no: 1043, name: 'Henry Collins', present: true, absent: false, leave: false, note: 'Note' },
    { gr_no: 1044, name: 'Scarlett Stewart', present: false, absent: true, leave: false, note: 'Note' },
    { gr_no: 1045, name: 'Sebastian Sanchez', present: true, absent: false, leave: false, note: 'Note' },
    { gr_no: 1046, name: 'Madison Morris', present: false, absent: true, leave: false, note: 'Note' },
    { gr_no: 1047, name: 'Elijah Miklesons', present: true, absent: false, leave: false, note: 'Note' },
    { gr_no: 1048, name: 'Abigail Reed', present: false, absent: false, leave: true, note: 'Note' },
    { gr_no: 1049, name: 'Alexander Cook', present: true, absent: false, leave: false, note: 'Note' },
    { gr_no: 1050, name: 'Charlotte Morgan', present: false, absent: true, leave: false, note: 'Note' },
    { gr_no: 1051, name: 'Jack Bell', present: true, absent: false, leave: false, note: 'Note' },
    { gr_no: 1052, name: 'Amelia Murphy', present: false, absent: true, leave: false, note: 'Note' },
    { gr_no: 1053, name: 'Michael Bailey', present: true, absent: false, leave: false, note: 'Note' },
    { gr_no: 1054, name: 'Mila Rivera', present: false, absent: true, leave: false, note: 'Note' },
    { gr_no: 1055, name: 'Evelyn Cox', present: true, absent: false, leave: false, note: 'Note' },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 50;
  const [selectAllPresent, setSelectAllPresent] = useState(false);
  const [selectAllAbsent, setSelectAllAbsent] = useState(false);

  const handleToggleAttendance = (studentId, field) => {
    setStudents(prevStudents =>
      prevStudents.map(student => {
        if (student.gr_no === studentId) {
          return {
            ...student,
            [field]: !student[field],
          };
        }
        return student;
      })
    );
  };

  const handleSelectAll = (field) => {
    const newValue = field === 'present' ? !selectAllPresent : !selectAllAbsent;
    setStudents(prevStudents =>
      prevStudents.map(student => ({
        ...student,
        [field]: newValue,
      }))
    );
    if (field === 'present') {
      setSelectAllPresent(newValue);
    } else {
      setSelectAllAbsent(newValue);
    }
  };

  const calculateAttendance = () => {
    const presentCount = students.filter(student => student.present).length;
    const absentCount = students.filter(student => student.absent || student.leave).length;
    return { presentCount, absentCount };
  };

  const { presentCount, absentCount } = calculateAttendance();
  const [date, changeDate] = useState(new Date());

  function changeValue(val) {
    changeDate(val);
  }

  const sortedStudents = [...students].sort((a, b) => a.name.localeCompare(b.name));

  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = sortedStudents.slice(indexOfFirstStudent, indexOfLastStudent);

  const totalPages = Math.ceil(sortedStudents.length / studentsPerPage);

  return (
    <div className="profilediv">
      <div className="container mt-4">
        <div className="header mb-4">
          <h2>Student's Attendance</h2>
        </div>
        <div className="filters mb-4">
          <div className="row">
            <div className="col-md-2 mb-3 mt-5">
              <label htmlFor="section" className="form-label">Section:</label>
              <select id="section" className="form-select">
                <option value="">Select Section</option>
                <option value="All">Red</option>
              </select>
            </div>
            <div className="col-md-2 mb-3 mt-5">
              <label htmlFor="class" className="form-label">Class:</label>
              <select id="class" className="form-select">
                <option value="">Select Class</option>
                <option value="">Nur</option>
              </select>
            </div>
            <div className="col-md-2 mb-3 mt-5">
              <label htmlFor="date" className="form-label">Date:</label>
              <select id="date" className="form-select">
                <option value="">Select Date</option>
                <option value="">{Date}</option>
              </select>
            </div>
            <div className='col-md-4 ms-5 pb-3'>
              <Calendar onChange={changeValue} value={date} />
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
                    checked={selectAllPresent}
                    onChange={() => handleSelectAll('present')}
                    className="form-check-input"
                  />
                  Present
                </th>
                <th>
                  <input
                    type="checkbox"
                    checked={selectAllAbsent}
                    onChange={() => handleSelectAll('absent')}
                    className="form-check-input"
                  />
                  Absent
                </th>
                <th>Leave</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              {currentStudents.map((student, index) => (
                <tr key={student.gr_no}>
                  <td>{indexOfFirstStudent + index + 1}</td>
                  <td>{student.gr_no}</td>
                  <td>{student.name}</td>
                  <td>
                    <input
                      type="checkbox"
                      checked={student.present}
                      onChange={() => handleToggleAttendance(student.gr_no, 'present')}
                      className="form-check-input"
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      checked={student.absent}
                      onChange={() => handleToggleAttendance(student.gr_no, 'absent')}
                      className="form-check-input"
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      checked={student.leave}
                      onChange={() => handleToggleAttendance(student.gr_no, 'leave')}
                      className="form-check-input"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={student.note}
                      className='border-0 form-control'
                      onChange={(e) =>
                        setStudents(prevStudents =>
                          prevStudents.map(s =>
                            s.gr_no === student.gr_no
                              ? { ...s, note: e.target.value }
                              : s
                          )
                        )
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="pagination">
          <nav>
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
          </nav>
        </div>
        <div className=' mb-4 me-4 d-flex justify-content-end'>
          <button className='btn btn-danger'>Save</button>
        </div>
        <div className="attendance-summary row">
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body text-center">
                <div className="icon mb-2">🎓</div>
                <div className="value h2">{students.length}</div>
                <div className="label">Total Students</div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body text-center">
                <div className="icon mb-2">✅</div>
                <div className="value h2">{presentCount}</div>
                <div className="label">Present Today</div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body text-center">
                <div className="icon mb-2">😥</div>
                <div className="value h2">{absentCount}</div>
                <div className="label">Absent Today</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentAttendance;
