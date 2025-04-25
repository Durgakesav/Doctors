// components/FilterPanel.jsx
import React from "react";
import './FilterPanel.css';

const specialties = [
  "General Physician",
  "Dentist",
  "Dermatologist",
  "Paediatrician",
  "Gynaecologist",
  "ENT",
  "Diabetologist",
  "Cardiologist",
  "Physiotherapist",
  "Endocrinologist",
  "Orthopaedic",
  "Ophthalmologist",
  "Gastroenterologist",
  "Pulmonologist",
  "Psychiatrist",
  "Urologist",
  "Dietitian/Nutritionist",
  "Psychologist",
  "Sexologist",
  "Nephrologist",
  "Neurologist",
  "Oncologist",
  "Ayurveda",
  "Homeopath",
];

const FilterPanel = ({ filters, setFilters }) => {
  const handleModeChange = (e) => {
    setFilters((prev) => ({ ...prev, mode: e.target.value }));
  };

  const handleSortChange = (e) => {
    setFilters((prev) => ({ ...prev, sortBy: e.target.value }));
  };

  const handleSpecialtyChange = (e) => {
    const value = e.target.value;
    setFilters((prev) => {
      const updated = prev.specialties.includes(value)
        ? prev.specialties.filter((s) => s !== value)
        : [...prev.specialties, value];
      return { ...prev, specialties: updated };
    });
  };

  return (
    <div className="filter-section">
      <h3 className="filter-header" data-testid="filter-header-moc">Consultation Mode</h3>
      <div className="filter-options">
        <div className="filter-option">
          <input
            type="radio"
            name="mode"
            value="Video"
            id="mode-video"
            checked={filters.mode === "Video"}
            onChange={handleModeChange}
            data-testid="filter-video-consult"
          />
          <label htmlFor="mode-video">Video Consult</label>
        </div>
        <div className="filter-option">
          <input
            type="radio"
            name="mode"
            value="In Clinic"
            id="mode-clinic"
            checked={filters.mode === "In Clinic"}
            onChange={handleModeChange}
            data-testid="filter-in-clinic"
          />
          <label htmlFor="mode-clinic">In Clinic</label>
        </div>
        <div className="filter-option">
          <input
            type="radio"
            name="mode"
            value=""
            id="mode-all"
            checked={filters.mode === ""}
            onChange={handleModeChange}
          />
          <label htmlFor="mode-all">All</label>
        </div>
      </div>

      <h3 className="filter-header" data-testid="filter-header-speciality">Specialty</h3>
      <div className="specialties-grid">
        {specialties.map((spec) => (
          <div className="filter-option" key={spec}>
            <input
              type="checkbox"
              id={`specialty-${spec.replace(/[^a-zA-Z0-9]/g, "-")}`}
              value={spec}
              checked={filters.specialties.includes(spec)}
              onChange={handleSpecialtyChange}
              data-testid={`filter-specialty-${spec.replace(/[^a-zA-Z0-9]/g, "-")}`}
            />
            <label htmlFor={`specialty-${spec.replace(/[^a-zA-Z0-9]/g, "-")}`}>
              {spec}
            </label>
          </div>
        ))}
      </div>

      <h3 className="filter-header" data-testid="filter-header-sort">Sort By</h3>
      <div className="filter-options">
        <div className="filter-option">
          <input
            type="radio"
            name="sort"
            value="name"
            id="sort-name"
            checked={filters.sortBy === "name"}
            onChange={handleSortChange}
          />
          <label htmlFor="sort-name">Name (A-Z)</label>
        </div>
        <div className="filter-option">
          <input
            type="radio"
            name="sort"
            value="fees"
            id="sort-fees"
            checked={filters.sortBy === "fees"}
            onChange={handleSortChange}
            data-testid="sort-fees"
          />
          <label htmlFor="sort-fees">Fees (Low to High)</label>
        </div>
        <div className="filter-option">
          <input
            type="radio"
            name="sort"
            value="experience"
            id="sort-experience"
            checked={filters.sortBy === "experience"}
            onChange={handleSortChange}
            data-testid="sort-experience"
          />
          <label htmlFor="sort-experience">Experience (High to Low)</label>
        </div>
        <div className="filter-option">
          <input
            type="radio"
            name="sort"
            value="rating"
            id="sort-rating"
            checked={filters.sortBy === "rating"}
            onChange={handleSortChange}
          />
          <label htmlFor="sort-rating">Rating (High to Low)</label>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;