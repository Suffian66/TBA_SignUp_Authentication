import { useState, useEffect } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { PersonFill } from "react-bootstrap-icons";
import { useForm } from "react-hook-form";
import {
  useGetTeacherByIdQuery,
  useUpdateTeacherMutation,
} from "../../services/Teacher";
import { useGetAddressByIdQuery } from "../../services/Address";

function TeacherProfile() {
  const { id } = useParams();
  const {
    data: teacher,
    error: teacherError,
    isLoading: isTeacherLoading,
  } = useGetTeacherByIdQuery(id);
  const [updateTeacher] = useUpdateTeacherMutation();
  const [isEditing, setIsEditing] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  // Initialize form data with teacher details when data is fetched
  useEffect(() => {
    if (teacher) {
      reset({
        firstName: teacher.firstName || "",
        middleName: teacher.middleName || "",
        lastName: teacher.lastName || "",
        gender: teacher.gender || "",
        namePrefix: teacher.namePrefix || "",
        dob: teacher.dob || "",
        cnic: teacher.cnic || "",
        occupation: teacher.occupation || "",
        father_HusbandName: teacher.father_HusbandName || "",
        degreeQualification: teacher.degreeQualification || "",
        certification: teacher.certification || "",
        salary: teacher.salary || "",
      });
    }
  }, [teacher, reset]);

  const onSubmit = async (data) => {
    try {
      await updateTeacher({ teacherId: id, ...data }).unwrap();
      setIsEditing(false);
    } catch (error) {
      console.error("Failed to update teacher", error);
    }
  };

  if (isTeacherLoading) return <div>Loading...</div>;
  if (teacherError) return <div>Error: {teacherError.message}</div>;
  if (!teacher || Object.keys(teacher).length === 0)
    return <div>No Teacher found</div>;

  return (
    <div className="profilediv">
      <Row className="mb-3 mt-3">
        <Form.Group as={Col} className="myprofilehead ms-2">
          <Form.Label>
            <PersonFill size={40} className="ms-2" />
          </Form.Label>
          <Form.Label className="myprofiletxt ms-2 ">
            <h2>
              Teacher's Profile ({teacher?.namePrefix} {teacher?.firstName})
            </h2>
          </Form.Label>
        </Form.Group>
      </Row>

      <div className="mt-2 mb-5 ps-3 pe-5">
        <h4 className="ms-2 textcolor">Personal Information</h4>
        {!isEditing ? (
          <div key={teacher.id}>
            <div className="row ms-2">
              <div className="col-3 divcolor fw-bold">First/Middle Name</div>
              <div className="col-3 divcolor ">
                {teacher?.firstName} {teacher?.middleName}
              </div>
              <div className="col-3 divcolor fw-bold">Last Name</div>
              <div className="col-3 divcolor">{teacher?.lastName}</div>
            </div>
            <div className="row ms-2">              
              <div className="col-3 divcolor fw-bold">Father's Name</div>
              <div className="col-3 divcolor">
                {teacher?.father_HusbandName}
              </div>
              <div className="col-3 divcolor fw-bold">Gender</div>
              <div className="col-3 divcolor ">{teacher?.gender}</div>
            </div>

            <div className="row ms-2">
            <div className="col-3 divcolor fw-bold">Name Prefix</div>
              <div className="col-3 divcolor">{teacher?.namePrefix}</div>
              
              <div className="col-3 divcolor fw-bold">D.O.B</div>
              <div className="col-3 divcolor">{teacher?.dob}</div>
            </div>
            <div className="row ms-2 ">
              <div className="col-3 divcolor fw-bold">CNIC</div>
              <div className="col-3 divcolor">{teacher?.cnic}</div>
              <div className="col-3 divcolor fw-bold">Occupation</div>
              <div className="col-3 divcolor">{teacher?.occupation}</div>
            </div>
            <div className="row ms-2">
              <div className="col-3 divcolor fw-bold">Degree Qualification</div>
              <div className="col-3 divcolor">
                {teacher?.degreeQualification}
              </div>
              <div className="col-3 divcolor fw-bold">Certification</div>
              <div className="col-3 divcolor">{teacher?.certification}</div>
            </div>
            <div className="row ms-2">
              <div className="col-3 divcolor fw-bold">Salary</div>
              <div className="col-3 divcolor">{teacher?.salary}</div>
              <div className="col-3 divcolor fw-bold">Postal Code</div>
              <div className="col-3 divcolor">{teacher?.postalCode}</div>
            </div>

            <div className='row ms-2'>
                    <div className='col-3 divcolor fw-bold'>
                        Address 1
                    </div>
                    <div className='col-9 divcolor'>
                        {teacher?.address1}
                    </div>
                </div>

                <div className='row ms-2'>
                    <div className='col-3 divcolor fw-bold'>
                        Address 2
                    </div>
                    <div className='col-9 divcolor'>
                        {teacher?.address2}
                    </div>
                </div>

                <div className='row ms-2'>
                    <div className='col-3 divcolor fw-bold'>
                        Address Type
                    </div>
                    <div className='col-3 divcolor'>
                        {teacher?.addressType}
                    </div>
                    <div className='col-3 divcolor fw-bold'>
                        State
                    </div>
                    <div className='col-3 divcolor'>
                        {teacher?.state}
                    </div>
                </div>

                <div className='row ms-2'>
                    <div className='col-3 divcolor fw-bold'>
                        City
                    </div>
                    <div className='col-3 divcolor'>
                        {teacher?.city}
                    </div>
                    <div className='col-3 divcolor fw-bold'>
                        Country
                    </div>
                    <div className='col-3 divcolor'>
                        {teacher?.country}
                    </div>
                </div>
          </div>
        ) : (
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="row ms-2">
              <Form.Group
                as={Col}
                controlId="formFirstName"
                className="col-3 divcolor fw-bold"
              >
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" {...register("firstName")} />
              </Form.Group>
              <Form.Group
                as={Col}
                controlId="formMiddleName"
                className="col-3 divcolor"
              >
                <Form.Label>Middle Name</Form.Label>
                <Form.Control type="text" {...register("middleName")} />
              </Form.Group>
              <Form.Group
                as={Col}
                controlId="formLastName"
                className="col-3 divcolor fw-bold"
              >
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" {...register("lastName")} />
              </Form.Group>
            </div>
            <div className="row ms-2">
              <Form.Group
                as={Col}
                controlId="formGender"
                className="col-3 divcolor fw-bold"
              >
                <Form.Label>Gender</Form.Label>
                <Form.Control type="text" {...register("gender")} />
              </Form.Group>
              <Form.Group
                as={Col}
                controlId="formDOB"
                className="col-3 divcolor"
              >
                <Form.Label>D.O.B</Form.Label>
                <Form.Control type="date" {...register("dob")} />
              </Form.Group>
              <Form.Group
                as={Col}
                controlId="formNAMEPREFIX"
                className="col-3 divcolor"
              >
                <Form.Label>namePrefix</Form.Label>
                <Form.Control type="text" {...register("namePrefix")} />
              </Form.Group>
            </div>
            <div className="row ms-2">
              <Form.Group
                as={Col}
                controlId="formCNIC"
                className="col-3 divcolor fw-bold"
              >
                <Form.Label>CNIC</Form.Label>
                <Form.Control type="text" {...register("cnic")} />
              </Form.Group>
              <Form.Group
                as={Col}
                controlId="formOccupation"
                className="col-3 divcolor"
              >
                <Form.Label>Occupation</Form.Label>
                <Form.Control type="text" {...register("occupation")} />
              </Form.Group>
            </div>
            <div className="row ms-2">
              <Form.Group
                as={Col}
                controlId="formFatherHusbandName"
                className="col-3 divcolor fw-bold"
              >
                <Form.Label>Father's Name</Form.Label>
                <Form.Control type="text" {...register("father_HusbandName")} />
              </Form.Group>
              <Form.Group
                as={Col}
                controlId="formDegreeQualification"
                className="col-3 divcolor"
              >
                <Form.Label>Degree Qualification</Form.Label>
                <Form.Control
                  type="text"
                  {...register("degreeQualification")}
                />
              </Form.Group>
            </div>
            <div className="row ms-2">
              <Form.Group
                as={Col}
                controlId="formCertification"
                className="col-3 divcolor fw-bold"
              >
                <Form.Label>Certification</Form.Label>
                <Form.Control type="text" {...register("certification")} />
              </Form.Group>
              <Form.Group
                as={Col}
                controlId="formSalary"
                className="col-3 divcolor"
              >
                <Form.Label>Salary</Form.Label>
                <Form.Control type="number" {...register("salary")} />
              </Form.Group>
            </div>
            <div className="row ms-2 mt-3">
              <Col>
                <Button type="submit" className="me-2">
                  Save
                </Button>
                <Button variant="secondary" onClick={() => setIsEditing(false)}>
                  Cancel
                </Button>
              </Col>
            </div>
          </Form>
        )}
      </div>

      {!isEditing && (
        <div className="justify-content-end d-flex me-5">
          <Button className="btn btn-danger" onClick={() => setIsEditing(true)}>
            Edit Profile
          </Button>
        </div>
      )}

      <hr />

      <div className="row float-start mt-5 ms-1">
        <div className="d-flex">
          <Link to="/teacherlist">
            <Button className="btn btn-primary btnstudent btn-color me-2">
              Back to Lists
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TeacherProfile;
