import React from 'react';
import './dorkBuilderForm.css';

const fileTypes = [
  'pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'txt', 'csv', 'json', 'xml', 'conf', 'log', 'bak', 'env', 'sql', 'zip', 'rar'
];

interface DorkBuilderFormProps {
  fields: Record<string, string | string[]>;
  setFields: (fields: Record<string, string | string[]>) => void;
  selectedCategory: string;
  theme: 'dark' | 'light';
}

const DorkBuilderForm: React.FC<DorkBuilderFormProps> = ({ fields, setFields, selectedCategory, theme }) => {
  // Helper for array fields
  const handleArrayChange = (field: string, idx: number, value: string) => {
    const arr = [...(fields[field] || [])];
    arr[idx] = value;
    setFields({ ...fields, [field]: arr });
  };

  const addKeyword = (field: string) => {
    setFields({ ...fields, [field]: [...(fields[field] || []), ""] });
  };

  const removeKeyword = (field: string, idx: number) => {
    const arr: string[] = Array.isArray(fields[field])
      ? (fields[field] as string[])
      : [fields[field] as string || ""];
    setFields({ ...fields, [field]: arr.filter((_, i) => i !== idx) });
  };

  return (
    <form className={`dork-builder-form ${theme}`} autoComplete="off">
      {/* intitle keywords */}
      <div className="form-group">
        <label className="form-label">In Title Keywords:</label>
        {(Array.isArray(fields.intitle) ? fields.intitle : [fields.intitle || ""]).map((kw: string, idx: number) => (
          <div key={idx} style={{ display: 'flex', gap: 8 }}>
            <input
              className="form-input"
              value={kw}
              onChange={e => handleArrayChange('intitle', idx, e.target.value)}
              placeholder='e.g. resume'
            />
            {(Array.isArray(fields.intitle) && fields.intitle.length > 1) && (
              <button
                type="button"
                className="remove-keyword-btn"
                onClick={() => removeKeyword('intitle', idx)}
              >
                -
              </button>
            )}
          </div>
        ))}
        <button type="button" className="add-keyword-btn" onClick={() => addKeyword('intitle')}>Add Another</button>
      </div>
      {/* intext keywords */}
      <div className="form-group">
        <label className="form-label">In Text Keywords:</label>
        {(Array.isArray(fields.intext) ? fields.intext : [fields.intext || ""]).map((kw: string, idx: number) => (
          <div key={idx} style={{ display: 'flex', gap: 8 }}>
            <input
              className="form-input"
              value={kw}
              onChange={e => handleArrayChange('intext', idx, e.target.value)}
              placeholder='e.g. confidential'
            />
            {(Array.isArray(fields.intext) && fields.intext.length > 1) && (
              <button
                type="button"
                className="remove-keyword-btn"
                onClick={() => removeKeyword('intext', idx)}
              >
                -
              </button>
            )}
          </div>
        ))}
        <button type="button" className="add-keyword-btn" onClick={() => addKeyword('intext')}>Add Another</button>
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
        if (Array.isArray(value)) return null; // skip arrays
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
};

export default DorkBuilderForm;