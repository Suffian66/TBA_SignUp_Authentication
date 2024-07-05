import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Confirmation from './Confirmation';
import Success from './Success';

const AddressForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    userName: '',
    firstName: '',
    middleName: '',
    lastName: '',
    gender: '',
    email: '',
    namePrefix: '',
    dob: '',
    cnic: '',
    occupation: '',
    password: '',
    address: '',
    city: ''
  });

  const handleChange = (newData) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleFinalSubmit = () => {
    // Save the data to a JSON file or send it to a server here.
    console.log('Final Data:', formData);
    nextStep(); // Move to the Success step
  };

  switch (step) {
    case 1:
      return <Step1 nextStep={nextStep} handleChange={handleChange} values={formData} />;
    case 2:
      return <Step2 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={formData} />;
    case 3:
      return <Confirmation prevStep={prevStep} values={formData} handleFinalSubmit={handleFinalSubmit} />;
    case 4:
      return <Success />;
    default:
      return <Step1 nextStep={nextStep} handleChange={handleChange} values={formData} />;
  }
};

export default AddressForm;
