import React from 'react';
import { useNavigate } from 'react-router-dom';

const Confirmation = ({ values, handleFinalSubmit }) => {
  const navigate = useNavigate();

  const handlePrev = () => {
    navigate('/step2');
  };

  const onSubmit = () => {
    handleFinalSubmit();
    navigate('/success');
  };

  return (
    <div>
      <h2>Confirmation</h2>
      <ul>
        <li>Username: {values.userName}</li>
        <li>First Name: {values.firstName}</li>
        <li>Middle Name: {values.middleName}</li>
        <li>Last Name: {values.lastName}</li>
        <li>Gender: {values.gender}</li>
        <li>Email: {values.email}</li>
        <li>Name Prefix: {values.namePrefix}</li>
        <li>Date of Birth: {values.dob}</li>
        <li>CNIC: {values.cnic}</li>
        <li>Occupation: {values.occupation}</li>
        <li>Password: {values.password}</li>
        <li>Address: {values.address}</li>
        <li>City: {values.city}</li>
      </ul>
      <button onClick={handlePrev}>Back</button>
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};

export default Confirmation;
