import React from 'react';

const zones = {
  'US-MIDA-PJM': 'PJM Interconnection',
  'US-CAL-CISO': 'CAISO',
  'US-TEX-ERCO': 'Electric Reliability Council of Texas',
  'US-NE-ISNE': 'ISO New England',
  'CA-ON': 'Ontario',
  DE: 'Germany',
  FR: 'France',
  IN: 'Mainland India',
  JP: 'Japan',
  CN: 'China',
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
          borderRadius: '4px',
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
