// App.jsx
import React, { useState, useEffect } from "react";
import SearchBox from "./components/SearchBox";
import FilterBar from "./components/FilterBar";
import DoctorList from "./components/DoctorList";
import DoctorForm from "./components/DoctorForm";
import { doctorService } from "./services/doctorService";
import "./App.css";

const App = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    searchQuery: "",
    online: false,
    offline: false,
    sortBy: "name",
  });

  // Fetch doctors from UDR API
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setLoading(true);
        setError(null);
        console.log("Fetching doctors...");
        const data = await doctorService.getAllDoctors();
        console.log("Doctors fetched:", data);
        
        if (data && data.length > 0) {
          setDoctors(data);
        } else {
          setError("No doctors found. Please try again later.");
        }
      } catch (err) {
        console.error("Error in fetchDoctors:", err);
        setError("Failed to fetch doctors. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  const handleAddDoctor = async (newDoctor) => {
    try {
      console.log("Adding new doctor:", newDoctor);
      const addedDoctor = await doctorService.addDoctor(newDoctor);
      console.log("Doctor added:", addedDoctor);
      setDoctors((prev) => [...prev, addedDoctor]);
    } catch (err) {
      console.error("Error adding doctor:", err);
      setError("Failed to add doctor. Please try again.");
    }
  };

  const filteredDoctors = doctors
    .filter((doc) => {
      const matchesSearch = doc.name
        .toLowerCase()
        .includes(filters.searchQuery.toLowerCase());
      const matchesMode =
        (!filters.online && !filters.offline) ||
        (filters.online && doc.video_consult) ||
        (filters.offline && doc.in_clinic);
      return matchesSearch && matchesMode;
    })
    .sort((a, b) => {
      switch (filters.sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "experience":
          // Extract numeric value from experience string (e.g., "10 Years of experience" -> 10)
          const expA = parseInt(a.experience.split(" ")[0]) || 0;
          const expB = parseInt(b.experience.split(" ")[0]) || 0;
          return expB - expA;
        case "fees":
          // Extract numeric value from fees string (e.g., "₹ 500" -> 500)
          const feeA = parseInt(a.fees.replace(/[^0-9]/g, "")) || 0;
          const feeB = parseInt(b.fees.replace(/[^0-9]/g, "")) || 0;
          return feeA - feeB;
        default:
          return 0;
      }
    });

  if (loading) {
    return (
      <div className="app">
        <h1>Doctor Directory</h1>
        <div className="loading">Loading doctors...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app">
        <h1>Doctor Directory</h1>
        <div className="error">{error}</div>
        <button 
          className="retry-button"
          onClick={() => window.location.reload()}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Doctor Directory</h1>
      </header>

      <div className="directory-view">
        <SearchBox doctors={doctors} setFilters={setFilters} />
        <FilterBar filters={filters} setFilters={setFilters} />
        {filteredDoctors.length > 0 ? (
          <DoctorList doctors={filteredDoctors} />
        ) : (
          <div className="no-results">No doctors found matching your criteria.</div>
        )}
        <DoctorForm onSubmit={handleAddDoctor} />
      </div>
    </div>
  );
};

export default App;
