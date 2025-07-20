import React from 'react';
import './dorkBuilderForm.css';

const fileTypes = [
  'pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'txt', 'csv', 'json', 'xml', 'conf', 'log', 'bak', 'env', 'sql', 'zip', 'rar'
];

interface DorkBuilderFormProps {
  fields: Record<string, string>;
  setFields: (fields: Record<string, string>) => void;
  selectedCategory: string;
  theme: 'dark' | 'light';
}

const DorkBuilderForm: React.FC<DorkBuilderFormProps> = ({ fields, setFields, selectedCategory, theme }) => (
  <form className={`dork-builder-form ${theme}`} autoComplete="off">
    {/* Always show intitle and intext */}
    <div className="form-group">
      <label className="form-label">In Title:</label>
      <input
        className="form-input"
        value={fields.intitle || ''}
        onChange={e => setFields({ ...fields, intitle: e.target.value })}
        placeholder="e.g. admin panel"
      />
    </div>
    <div className="form-group">
      <label className="form-label">In Text:</label>
      <input
        className="form-input"
        value={fields.intext || ''}
        onChange={e => setFields({ ...fields, intext: e.target.value })}
        placeholder="e.g. confidential"
      />
    </div>
    {/* Show filetype dropdown if category is File Types or similar */}
    {(selectedCategory === 'File Types' || fields.fileType !== undefined) && (
      <div className="form-group">
        <label className="form-label">File Type:</label>
        <select
          className="form-input"
          value={fields.fileType || ''}
          onChange={e => setFields({ ...fields, fileType: e.target.value })}
        >
          <option value="">Select file type</option>
          {fileTypes.map(ft => (
            <option key={ft} value={ft}>{ft}</option>
          ))}
        </select>
      </div>
    )}
    {/* Show other fields dynamically */}
    {Object.entries(fields).map(([key, value]) => {
      if (['intitle', 'intext', 'fileType'].includes(key)) return null;
      return (
        <div className="form-group" key={key}>
          <label className="form-label">{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
          <input
            className="form-input"
            value={value}
            onChange={e => setFields({ ...fields, [key]: e.target.value })}
            placeholder={key}
          />
        </div>
      );
    })}
  </form>
);

export default DorkBuilderForm;