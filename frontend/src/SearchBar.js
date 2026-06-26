import React from "react";

function SearchBar({ term, setTerm, searchThreat }) {
  return (
    <div className="search-wrapper glass-card">
      <input
        type="text"
        placeholder="Search cyber threats..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />

      <button onClick={searchThreat}>Search</button>
    </div>
  );
}

export default SearchBar;