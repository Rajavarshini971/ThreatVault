import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import SearchBar from "./SearchBar";
import ResultCard from "./ResultCard";

function App() {
  const [term, setTerm] = useState("");
  const [threat, setThreat] = useState(null);

  const searchThreat = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:5000/search/${term}`
      );
      setThreat(response.data);
    } catch (error) {
      console.log(error);
      alert("Threat not found");
    }
  };

  return (
    <div className="dashboard">
      <div className="background-glow"></div>

      <header className="header">
        <h1 className="logo">ThreatVault</h1>
      </header>

      <SearchBar
        term={term}
        setTerm={setTerm}
        searchThreat={searchThreat}
      />

      <div className="dashboard-single">
        <ResultCard threat={threat} />
      </div>
    </div>
  );
}

export default App;