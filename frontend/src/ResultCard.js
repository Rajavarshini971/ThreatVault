import React from "react";

function ResultCard({ threat }) {
  if (!threat || threat.message) return null;

  const riskLevel = threat.risk_level || "Unknown";
  const riskClass = String(riskLevel).toLowerCase();

  return (
    <div className="threat-card glass-card">
      <h2>{threat.term_name || "Unknown threat"}</h2>

      <div className="info-row">
        <span>Risk Level</span>
        <span className={riskClass}>{riskLevel}</span>
      </div>

      <div className="info-row">
        <span>Severity Level</span>
        <span>
          {threat.severity_level != null ? `${threat.severity_level}/10` : "N/A"}
        </span>
      </div>

      <div className="info-row">
        <span>Rarity Factor</span>
        <span>{threat.rarity_factor || "N/A"}</span>
      </div>

      <div className="info-row">
        <span>Difficulty To Solve</span>
        <span>{threat.difficulty || "N/A"}</span>
      </div>

      <div className="definition-box">
        <h4>Definition</h4>
        <p>{threat.definition || "No definition available."}</p>
      </div>
    </div>
  );
}

export default ResultCard;
