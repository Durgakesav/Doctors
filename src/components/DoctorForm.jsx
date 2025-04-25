import React, { useState } from "react";
import "./DoctorForm.css";

const DoctorForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    specialty: "",
    experience: "",
    fees: "",
    mode: "online",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: "",
      specialty: "",
      experience: "",
      fees: "",
      mode: "online",
    });
  };

  return (
    <form className="doctor-form" onSubmit={handleSubmit} data-testid="doctor-form">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          data-testid="doctor-name-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="specialty">Specialty:</label>
        <input
          type="text"
          id="specialty"
          name="specialty"
          value={formData.specialty}
          onChange={handleChange}
          required
          data-testid="doctor-specialty-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="experience">Experience (years):</label>
        <input
          type="number"
          id="experience"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          required
          data-testid="doctor-experience-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="fees">Fees (₹):</label>
        <input
          type="number"
          id="fees"
          name="fees"
          value={formData.fees}
          onChange={handleChange}
          required
          data-testid="doctor-fees-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="mode">Mode:</label>
        <select
          id="mode"
          name="mode"
          value={formData.mode}
          onChange={handleChange}
          data-testid="doctor-mode-select"
        >
          <option value="online">Online</option>
          <option value="offline">Offline</option>
        </select>
      </div>
      <button type="submit" className="submit-button" data-testid="doctor-submit-button">
        Add Doctor
      </button>
    </form>
  );
};

export default DoctorForm; 