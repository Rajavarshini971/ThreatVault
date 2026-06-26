import React from "react";

function ResultCard({ threat }) {
  if (!threat || threat.message) return null;

  const riskClass = threat.risk_level.toLowerCase();

  return (
    <div className="threat-card glass-card">
      <h2>{threat.term_name}</h2>

      <div className="info-row">
        <span>Risk Level</span>
        <span className={riskClass}>{threat.risk_level}</span>
      </div>

      <div className="info-row">
        <span>Severity Level</span>
        <span>{threat.severity_level}/10</span>
      </div>

      <div className="info-row">
        <span>Rarity Factor</span>
        <span>{threat.rarity_factor}</span>
      </div>

      <div className="info-row">
        <span>Difficulty To Solve </span>
        <span>{threat.difficulty}</span>
      </div>

      <div className="definition-box">
        <h4>Definition</h4>
        <p>{threat.definition}</p>
      </div>
    </div>
  );
}

export default ResultCard;