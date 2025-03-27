import React from 'react';

// List of zones
const zones = {
  "US-MIDA-PJM": "PJM Interconnection",
  "US-CAL-CISO": "CAISO (Pro only)",
  "US-TEX-ERCO": "Electric Reliability Council of Texas (Pro only)",
  "US-NE-ISNE": "ISO New England (Pro only)",
  "CA-ON": "Ontario (Pro only)",
  "DE": "Germany (Pro only)",
  "FR": "France (Pro only)",
  "IN": "Mainland India (Pro only)",
  "JP": "Japan (Pro only)",
  "CN": "China (Pro only)",
};

function ZoneSelector({ selectedZone, onChange }) {
  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <label htmlFor="zone" style={{ marginRight: '1rem' }}>
        🌍 Select Power Grid Zone:
      </label>
      <select
        id="zone"
        value={selectedZone}
        onChange={(e) => onChange(e.target.value)}
        style={{
          padding: '0.5rem',
          backgroundColor: '#2a2a2a',
          color: '#f0f0f0',
          border: '1px solid #555',
          borderRadius: '4px'
        }}
      >
        {Object.entries(zones).map(([code, name]) => (
          <option key={code} value={code}>
            {name} ({code})
          </option>
        ))}
      </select>
    </div>
  );
}

export default ZoneSelector;
