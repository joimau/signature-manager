import React, { useState } from 'react';
import './App.css';
import MyForm from './form';
import SignaturePreview from './signaturePreview';

interface FormInputs {
  fullName: string;
  jobPosition: string;
  emailAddress: string;
  phoneNumber: string;
  calendlyUrl: string;
}

const App: React.FC = () => {
  const [inputs, setInputs] = useState<FormInputs>({
    fullName: 'John Doe',
    jobPosition: 'Project Manager',
    emailAddress: 'johndoe@bndigital.co',
    phoneNumber: '+19292351625',
    calendlyUrl: '',
  });

  return (
    <div className="app-container">
      <MyForm inputs={inputs} setInputs={setInputs} />
      <SignaturePreview inputs={inputs} />
    </div>
  );
};

export default App;
