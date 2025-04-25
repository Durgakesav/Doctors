import React, { useState } from "react";
import "./Profile.css";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Medical Center Dr, Healthcare City, HC 12345",
    specialty: "General Physician",
    experience: "15 years",
    education: "MD, Medical University",
    languages: ["English", "Spanish"],
    bio: "Experienced physician with a focus on preventive care and patient education. Committed to providing high-quality healthcare services to all patients."
  });

  const [formData, setFormData] = useState({ ...profile });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLanguageChange = (e) => {
    const languages = e.target.value.split(',').map(lang => lang.trim());
    setFormData(prev => ({
      ...prev,
      languages
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProfile(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({ ...profile });
    setIsEditing(false);
  };

  return (
    <div className="profile-container" data-testid="profile-container">
      <div className="profile-header">
        <h2 className="profile-title" data-testid="profile-title">Doctor Profile</h2>
        {!isEditing && (
          <button 
            className="edit-button" 
            onClick={() => setIsEditing(true)}
            data-testid="edit-profile-button"
          >
            Edit Profile
          </button>
        )}
      </div>

      {isEditing ? (
        <form className="profile-form" onSubmit={handleSubmit} data-testid="profile-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              data-testid="profile-name-input"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              data-testid="profile-email-input"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              data-testid="profile-phone-input"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              data-testid="profile-address-input"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="specialty">Specialty</label>
            <input
              type="text"
              id="specialty"
              name="specialty"
              value={formData.specialty}
              onChange={handleChange}
              data-testid="profile-specialty-input"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="experience">Experience</label>
            <input
              type="text"
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              data-testid="profile-experience-input"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="education">Education</label>
            <input
              type="text"
              id="education"
              name="education"
              value={formData.education}
              onChange={handleChange}
              data-testid="profile-education-input"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="languages">Languages (comma-separated)</label>
            <input
              type="text"
              id="languages"
              name="languages"
              value={formData.languages.join(', ')}
              onChange={handleLanguageChange}
              data-testid="profile-languages-input"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="bio">Bio</label>
            <textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              data-testid="profile-bio-input"
            />
          </div>
          
          <div className="form-actions">
            <button 
              type="button" 
              className="cancel-button" 
              onClick={handleCancel}
              data-testid="profile-cancel-button"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="save-button"
              data-testid="profile-save-button"
            >
              Save Changes
            </button>
          </div>
        </form>
      ) : (
        <div className="profile-details" data-testid="profile-details">
          <div className="profile-section">
            <h3 className="section-title">Personal Information</h3>
            <div className="detail-item">
              <span className="detail-label">Name:</span>
              <span className="detail-value" data-testid="profile-name">{profile.name}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Email:</span>
              <span className="detail-value" data-testid="profile-email">{profile.email}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Phone:</span>
              <span className="detail-value" data-testid="profile-phone">{profile.phone}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Address:</span>
              <span className="detail-value" data-testid="profile-address">{profile.address}</span>
            </div>
          </div>
          
          <div className="profile-section">
            <h3 className="section-title">Professional Information</h3>
            <div className="detail-item">
              <span className="detail-label">Specialty:</span>
              <span className="detail-value" data-testid="profile-specialty">{profile.specialty}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Experience:</span>
              <span className="detail-value" data-testid="profile-experience">{profile.experience}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Education:</span>
              <span className="detail-value" data-testid="profile-education">{profile.education}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Languages:</span>
              <span className="detail-value" data-testid="profile-languages">{profile.languages.join(', ')}</span>
            </div>
          </div>
          
          <div className="profile-section">
            <h3 className="section-title">Bio</h3>
            <p className="bio-text" data-testid="profile-bio">{profile.bio}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile; 