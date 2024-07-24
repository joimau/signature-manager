import React from 'react';
import './form.css';

interface FormInputs {
  fullName: string;
  jobPosition: string;
  emailAddress: string;
  phoneNumber: string;
  calendlyUrl: string;
}

interface MyFormProps {
  inputs: FormInputs;
  setInputs: React.Dispatch<React.SetStateAction<FormInputs>>;
}

const MyForm: React.FC<MyFormProps> = ({ inputs, setInputs }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Input Values:', inputs);
    // You can use the input values stored in `inputs` here
  };

  const handleReset = () => {
    setInputs({
      fullName: 'John Doe',
      jobPosition: 'Project Manager',
      emailAddress: 'johndoe@bndigital.co',
      phoneNumber: '+19292351625',
      calendlyUrl: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={inputs.fullName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="jobPosition">Job Position</label>
        <input
          type="text"
          id="jobPosition"
          name="jobPosition"
          value={inputs.jobPosition}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="emailAddress">Email Address</label>
        <input
          type="email"
          id="emailAddress"
          name="emailAddress"
          value={inputs.emailAddress}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={inputs.phoneNumber}
          onChange={handleChange}
        />
        <div className="hint-text">Enter your phone number in the format: +19292351625. Keep this default BN Digital phone number if you do not want to add your own.</div>
      </div>
      <div>
        <label htmlFor="calendlyUrl">Calendly URL</label>
        <input
          type="url"
          id="calendlyUrl"
          name="calendlyUrl"
          value={inputs.calendlyUrl}
          onChange={handleChange}
        />
                <div className="hint-text">Make sure that the link leads to the "Select a Date & Time", not just the Calendly page with meeting types.</div>

      </div>
      <div className="button-group">
        <button type="button" onClick={handleReset}>Restore Defaults</button>
      </div>
    </form>
  );
};

export default MyForm;
