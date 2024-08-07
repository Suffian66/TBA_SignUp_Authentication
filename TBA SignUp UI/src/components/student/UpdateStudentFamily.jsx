import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetStudentByIdQuery, useUpdateStudentFamilyMutation } from "../../services/api/Studentlist";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

function UpdateStudentFamily() {
  const { studentId } = useParams();
  const navigate = useNavigate();
  const { data: studentData, isLoading: isLoadingStudent } = useGetStudentByIdQuery(studentId);
  const [updateStudentFamily] = useUpdateStudentFamilyMutation();
  const [familyMembers, setFamilyMembers] = useState([]);

  useEffect(() => {
    if (studentData) {
      // Extract familyMembers from $values if needed
      const members = studentData.studentFamilies?.$values || [];
      setFamilyMembers(members);
    }
  }, [studentData]);

  const handleFamilyChange = (index, field, value) => {
    const updatedFamilyMembers = [...familyMembers];
    updatedFamilyMembers[index] = { ...updatedFamilyMembers[index], [field]: value };
    setFamilyMembers(updatedFamilyMembers);
  };

  const handleSaveChanges = async (e) => {
    e.preventDefault();
    try {
      // Ensure personIncome is a number
      const updatedFamilyMembers = familyMembers.map(member => ({
        ...member,
        personIncome: parseFloat(member.personIncome) || 0
      }));
      
      await updateStudentFamily({ studentId, familyMembers: updatedFamilyMembers });
      alert("Family information updated successfully.");
      navigate(-1);
    } catch (error) {
      console.error("Error updating family information:", error.message);
      alert("Failed to update family information. Please try again.");
    }
  };

  if (isLoadingStudent) return <div>Loading...</div>;

  return (
    <div className="mt-2 mb-5 ps-3 pe-5">
      <h2>Edit Family Information</h2>
      <form onSubmit={handleSaveChanges}>
        {familyMembers.length > 0 ? (
          familyMembers.map((member, index) => (
            <Row key={index} className="mb-3">
              <Col md={3} className="fw-bold">Name of Member</Col>
              <Col md={3}>
                <Form.Control
                  type="text"
                  value={member.familyMemberName || ""}
                  onChange={(e) => handleFamilyChange(index, "familyMemberName", e.target.value)}
                  placeholder="Name of Member"
                />
              </Col>
              <Col md={2} className="fw-bold">Relation</Col>
              <Col md={2}>
                <Form.Control
                  type="text"
                  value={member.familyRelation || ""}
                  onChange={(e) => handleFamilyChange(index, "familyRelation", e.target.value)}
                  placeholder="Relation"
                />
              </Col>
              <Col md={3} className="fw-bold mt-3">Occupation</Col>
              <Col md={3}>
                <Form.Control
                  type="text"
                   className="mt-3"
                  value={member.personOccupation || ""}
                  onChange={(e) => handleFamilyChange(index, "personOccupation", e.target.value)}
                  placeholder="Occupation"
                />
              </Col>
              <Col md={2} className="fw-bold mt-3">Income</Col>
              <Col md={2}>
                <Form.Control
                  type="number"
                  className="mt-3"
                  value={member.personIncome || ""}
                  onChange={(e) => handleFamilyChange(index, "personIncome", e.target.value)}
                  placeholder="Income"
                />
              </Col>
            </Row>
          ))
        ) : (
          <div>No family information available.</div>
        )}
        <Row className="mt-4">
          <Col>
            <button className="btn btn-success me-2" type="submit">
              Save Changes
            </button>
            <button
              className="btn btn-secondary"
              type="button"
              onClick={() => navigate(-1)}
            >
              Cancel
            </button>
          </Col>
        </Row>
      </form>
    </div>
  );
}

export default UpdateStudentFamily;
