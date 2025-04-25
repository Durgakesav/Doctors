// components/SearchBox.jsx
import React, { useState } from "react";
import "./SearchBox.css";

const SearchBox = ({ doctors, setFilters }) => {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    setFilters((prev) => ({ ...prev, searchQuery: value }));

    if (value.trim() === "") {
      setSuggestions([]);
      return;
    }

    const matched = doctors
      .filter((doc) =>
        doc.name.toLowerCase().includes(value.toLowerCase())
      )
      .slice(0, 3);
    setSuggestions(matched);
  };

  const handleSuggestionClick = (name) => {
    setInput(name);
    setFilters((prev) => ({ ...prev, searchQuery: name }));
    setSuggestions([]);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search doctor by name..."
        className="search-input"
        value={input}
        onChange={handleChange}
        data-testid="autocomplete-input"
      />
      {suggestions.length > 0 && (
        <div className="suggestions-container">
          {suggestions.map((doc) => (
            <div
              key={doc.id}
              className="suggestion-item"
              onClick={() => handleSuggestionClick(doc.name)}
              data-testid="suggestion-item"
            >
              <span className="suggestion-name">{doc.name}</span>
              <span className="suggestion-specialty">{doc.specialty}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBox;
