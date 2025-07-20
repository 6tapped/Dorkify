import React from 'react';
import './actionButtons.css';

interface ActionButtonsProps {
  dorkQuery: string;
  onSave: () => void;
  onDownload: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ dorkQuery, onSave, onDownload }) => {
  const handleSearch = () => {
    window.open(`https://www.google.com/search?q=${encodeURIComponent(dorkQuery)}`, '_blank');
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(dorkQuery);
  };
  return (
    <div className="action-buttons">
      <button className="action-btn" onClick={handleSearch}>🔍 Search Now</button>
      <button className="action-btn" onClick={handleCopy}>📋 Copy</button>
      <button className="action-btn" onClick={onSave}>💾 Save</button>
      <button className="action-btn" onClick={onDownload}>⬇️ Download History</button>
    </div>
  );
};

export default ActionButtons;