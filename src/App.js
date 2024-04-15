import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [studentData, setstudentData] = useState({
    name: '',
    email: '',
    phoneNo: '',
    eNo: '',
    gender: '',
    errors: {
      name: '',
      email: '',
      phoneNo: '',
      eNo: '',
      gender: '',
      duplicateeNo: ''
    },
    submittedData: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let errors = { ...studentData.errors };
  
    switch (name) {
      case 'name':
        errors.name = value.length === 0 ? 'Name cannot be blank' : '';
        if (!/^[a-zA-Z0-9 ]+$/.test(value)) {
          errors.name = 'Name must not contain special characters';
        }
        break;
      case 'email':
        errors.email = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Invalid email address' : '';
        break;
      case 'phoneNo':
        errors.phoneNo = !/^\d{10}$/.test(value) ? 'Phone number must be 10 digits' : '';
        break;
      case 'eNo':
        
        errors.duplicateeNo = studentData.submittedData.some(data => data.rollNo === value) ? 'Enrollment number already exists' : '';
        break;
        case 'gender': // Handle gender change
        setstudentData({ ...studentData, gender: value });
        break;
      default:
        break;
    }
  
    setstudentData({
      ...studentData,
      [name]: value,
      errors: { ...errors, [name]: errors[name] }
    });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = { ...studentData.errors };
    let hasError = false;

    Object.keys(studentData).forEach(key => {
      if (key !== 'errors' && key !== 'submittedData' && !studentData[key]) {
        errors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} cannot be blank`;
        hasError = true;
      }
    });

    setstudentData({ ...studentData, errors });

    if (!hasError) {
      const newData = { ...studentData };
      delete newData.errors;
      newData.submittedData.push(newData);
      setstudentData({
        name: '',
        email: '',
        phoneNo: '',
        eNo: '',
        gender: '',
        errors: {
          name: '',
          email: '',
          phoneNo: '',
          eNo: '',
          gender: '',
          duplicateeNo: ''
        },
        submittedData: newData.submittedData
      });
    }
  };

  return (
    <div className="container">
      <h1 style={{textAlign: "center"}}>Student Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="student-group">
          <label>Student Name:</label>
          <input type="text" placeholder='Enter your name' name="name" value={studentData.name} onChange={handleChange} />
          {studentData.errors.name && <span className="error">{studentData.errors.name}</span>}
        </div>
        <div className="student-group">
          <label>Student Email:</label>
          <input type="email" placeholder='Enter your email' name="email" value={studentData.email} onChange={handleChange} />
          {studentData.errors.email && <span className="error">{studentData.errors.email}</span>}
        </div>
        <div className="student-group">
          <label>Phone No. :</label>
          <input type="text" placeholder='Enter your phone number' name="phoneNo" value={studentData.phoneNo} onChange={handleChange} />
          {studentData.errors.phoneNo && <span className="error">{studentData.errors.phoneNo}</span>}
        </div>
        <div className="student-group">
          <label>Enrollment No. :</label>
          <input type="text" placeholder='Enter your college enrollment number' name="eNo" value={studentData.eNo} onChange={handleChange} />
          {studentData.errors.eNo && <span className="error">{studentData.errors.eNo}</span>}
          {studentData.errors.duplicateeNo && <span className="error">{studentData.errors.duplicateeNo}</span>}
        </div>

        <div className="student-group">
          <label>Gender:</label>
          <div className="gender-options">
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              checked={studentData.gender === "male"}
              onChange={handleChange}
            />
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              checked={studentData.gender === "female"}
              onChange={handleChange}
            />
            <label htmlFor="female">Female</label>
          </div>
          {studentData.errors.gender && <span className="error">{studentData.errors.gender}</span>}
        </div>

        <button type="submit" style={{ display: "block", margin: "0 auto" }}>Submit</button>
      </form>
      {studentData.submittedData.length > 0 && (
        <div className="submitted-data">
          <h2>Submitted Data</h2>
          <table>
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Student Email</th>
                <th>Phone No.</th>
                <th>Enrollment No.</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              {studentData.submittedData.map((data, index) => (
                <tr key={index}>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.phoneNo}</td>
                  <td>{data.eNo}</td>
                  <td>{data.gender}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default App;