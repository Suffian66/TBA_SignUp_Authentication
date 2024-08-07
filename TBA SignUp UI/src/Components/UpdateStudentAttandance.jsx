// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useGetStudentsByClassNameQuery } from '../services/ClassList';
import {  useGetClassListQuery, useUpdateStudentAttendanceMutation } from '../services/Attendance';

const UpdateStudentAttandance = () => {
  const [selectedClass, setSelectedClass] = useState('');
  const { data: classes, isLoading: classesLoading } = useGetClassListQuery();
  const { data: students, isLoading: studentsLoading } = useGetStudentsByClassNameQuery(selectedClass, {
    skip: !selectedClass,
  });
  const [updateAttendance] = useUpdateStudentAttendanceMutation();

  const { handleSubmit, control, setValue, getValues } = useForm();

  const classWise = classes?.$values || [];
  const studentData = students?.$values || [];

  useEffect(() => {
    if (studentData && studentData.length > 0) {
      studentData.forEach(student => {
        setValue(`${student.studentId}.present`, student.present);
        setValue(`${student.studentId}.absent`, student.absent);
        setValue(`${student.studentId}.leave`, student.leave);
        setValue(`${student.studentId}.remarks`, student.remarks || '');
        setValue(`${student.studentId}.studentAttendanceId`, student.studentAttendanceId);
      });
    }
  }, [studentData, setValue]);

  const onSubmit = async (data) => {
    console.log(data);
    if (!selectedClass) {
      console.error("No class selected");
      return;
    }

    const selectedClassData = classes?.$values?.find(c => c.title === selectedClass);

    const formattedData = studentData.map(student => ({
      classId: selectedClassData.lookUpCtgDetailId,  // Ensure classId is correctly set
      studentId: student.studentId,
      studentAttendanceId: data[student.studentId]?.studentAttendanceId, 
      AttendanceDate: new Date().toISOString().split('T')[0],
      present: data[student.studentId]?.present || false,
      absent: data[student.studentId]?.absent || false,
      leave: data[student.studentId]?.leave || false,
      remarks: data[student.studentId]?.remarks || '',
    }));

    console.log("Formatted Data:", formattedData);
    try {
      // Wrap the data in an object with the key "attendanceDto"
      // const payload = { attendanceDto: formattedData };
      const updateAttendanceResponse = await updateAttendance(formattedData).unwrap();
      console.log("Add attendance response", updateAttendanceResponse);
      alert("Attendance added successfully");
    } catch (error) {
      console.error("Error adding attendance:", error);
    }
  //   try {
  //     const Addattendanceresponse = await addAttendance({ attendanceDto: formattedData }).unwrap();
  //     console.log("Add attendance response", Addattendanceresponse);
  //   } catch (error) {
  //     console.error("Error adding attendance:", error);
  //   }
  };

  const handleCheckboxChange = (studentId, field, value) => {
    setValue(`${studentId}.${field}`, value);
    if (field === 'present') {
      setValue(`${studentId}.absent`, false);
      setValue(`${studentId}.leave`, false);
    } else if (field === 'absent') {
      setValue(`${studentId}.present`, false);
      setValue(`${studentId}.leave`, false);
    } else if (field === 'leave') {
      setValue(`${studentId}.present`, false);
      setValue(`${studentId}.absent`, false);
    }
  };

  return (
    <div className="profilediv">
      <div className="container mt-4">
        <div className="header mb-4">
          <h2>Student's Attendance</h2>
        </div>
        <div className="filters mb-4">
          <div className="row">
            <div className="col-md-2 mb-3 mt-5">
              <label htmlFor="class" className="form-label">Class:</label>
              <select
                id="class"
                className="form-select"
                value={selectedClass}
                onChange={e => setSelectedClass(e.target.value)}
              >
                <option value="">Select Class</option>
                {classesLoading ? (
                  <option>Loading...</option>
                ) : (
                  classWise?.map(classItem => (
                    <option key={classItem.lookUpCtgDetailId} value={classItem.title}>
                      {classItem.title}
                    </option>
                  ))
                )}
              </select>
            </div>
          </div>
        </div>
        <div className="attendance-table mb-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>GR_NO</th>
                  <th>Student's Name</th>
                  <th>Present</th>
                  <th>Absent</th>
                  <th>Leave</th>
                  <th>Remarks</th>
                </tr>
              </thead>
              <tbody>
                {studentsLoading ? (
                  <tr>
                    <td colSpan="7">Loading...</td>
                  </tr>
                ) : (
                  studentData?.map((student, index) => (
                    <tr key={student.studentId}>
                      <td>{index + 1}</td>
                      <td>{student.gR_No}</td>
                      <td>{student.firstName} {student.lastName}</td>
                      <td>
                        <Controller
                          name={`${student.studentId}.present`}
                          control={control}
                          defaultValue={false}
                          render={({ field }) => (
                            <input
                              type="checkbox"
                              className="form-check-input"
                              checked={field.value}
                              onChange={() => {
                                const newValue = !field.value;
                                field.onChange(newValue);
                                handleCheckboxChange(student.studentId, 'present', newValue);
                              }}
                            />
                          )}
                        />
                      </td>
                      <td>
                        <Controller
                          name={`${student.studentId}.absent`}
                          control={control}
                          defaultValue={false}
                          render={({ field }) => (
                            <input
                              type="checkbox"
                              className="form-check-input"
                              checked={field.value}
                              onChange={() => {
                                const newValue = !field.value;
                                field.onChange(newValue);
                                handleCheckboxChange(student.studentId, 'absent', newValue);
                              }}
                            />
                          )}
                        />
                      </td>
                      <td>
                        <Controller
                          name={`${student.studentId}.leave`}
                          control={control}
                          defaultValue={false}
                          render={({ field }) => (
                            <input
                              type="checkbox"
                              className="form-check-input"
                              checked={field.value}
                              onChange={() => {
                                const newValue = !field.value;
                                field.onChange(newValue);
                                handleCheckboxChange(student.studentId, 'leave', newValue);
                              }}
                            />
                          )}
                        />
                      </td>
                      <td>
                        <Controller
                          name={`${student.studentId}.remarks`}
                          control={control}
                          defaultValue=""
                          render={({ field }) => (
                            <input
                              type="text"
                              className="form-control"
                              placeholder='Enter Your Remarks..'
                              {...field}
                            />
                          )}
                        />
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
            <button type="submit" className="btn btn-primary">Update Attendance</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateStudentAttandance;
