import React from "react";
import "./DoctorList.css";

const DoctorList = ({ doctors }) => {
  console.log("Rendering DoctorList with doctors:", doctors);
  
  if (!doctors || doctors.length === 0) {
    return <div className="no-doctors">No doctors available.</div>;
  }

  return (
    <div className="doctors-grid">
      {doctors.map((doc) => (
        <div key={doc.id} className="doctor-card" data-testid="doctor-card">
          <div className="doctor-profile">
            <div className="doctor-image-container">
              <img 
                src={doc.photo} 
                alt={`${doc.name}`} 
                className="doctor-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/doctor-images/default-doctor.svg";
                }}
              />
            </div>
            <div className="doctor-info">
              <h2 className="doctor-name" data-testid="doctor-name">{doc.name}</h2>
              <p className="doctor-specialty" data-testid="doctor-specialty">{doc.specialities[0].name}</p>
            </div>
          </div>
          <div className="doctor-details">
            <p className="doctor-experience" data-testid="doctor-experience">
              <span className="detail-label">Experience:</span> {doc.experience}
            </p>
            <p className="doctor-fee" data-testid="doctor-fee">
              <span className="detail-label">Fees:</span> {doc.fees}
            </p>
            {doc.rating && (
              <p className="doctor-rating">
                <span className="detail-label">Rating:</span> {doc.rating}/5
              </p>
            )}
          </div>
          <div className="doctor-mode">
            {doc.video_consult ? "Video Consult" : "In-Clinic Visit"}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DoctorList;
