import React from "react";
import "./FilterBar.css";

const FilterBar = ({ filters, setFilters }) => {
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSortChange = (e) => {
    const { value } = e.target;
    setFilters((prev) => ({
      ...prev,
      sortBy: value,
    }));
  };

  return (
    <div className="filter-bar">
      <div className="filter-group">
        <label>
          <input
            type="checkbox"
            name="online"
            checked={filters.online}
            onChange={handleCheckboxChange}
            data-testid="online-filter"
          />
          Online
        </label>
        <label>
          <input
            type="checkbox"
            name="offline"
            checked={filters.offline}
            onChange={handleCheckboxChange}
            data-testid="offline-filter"
          />
          Offline
        </label>
      </div>
      <div className="filter-group">
        <label>Sort by:</label>
        <select
          value={filters.sortBy}
          onChange={handleSortChange}
          data-testid="sort-select"
        >
          <option value="name">Name</option>
          <option value="experience">Experience</option>
          <option value="fees">Fees</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar; 