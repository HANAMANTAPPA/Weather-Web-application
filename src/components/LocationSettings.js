// LocationSettings.js
import React, { useState } from "react";

const LocationSettings = ({ onLocationChange }) => {
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLocationChange(location);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LocationSettings;
