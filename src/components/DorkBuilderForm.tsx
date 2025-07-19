import React from 'react';
import './dorkBuilderForm.css';

const fieldLabels: Record<string, string> = {
  site: "Site",
  fileType: "File Type",
  intitle: "In Title",
  allintitle: "All In Title",
  inurl: "In URL",
  allinurl: "All In URL",
  inText: "In Text",
  allintext: "All In Text",
  wildcard: "Wildcard",
  or: "Logical OR",
  excludeSite: "Exclude Site",
  cache: "Cached Page",
  related: "Related Site",
  link: "Backlink"
};

const DorkBuilderForm = ({ fields, setFields }: {
  fields: Record<string, string>,
  setFields: (fields: Record<string, string>) => void
}) => (
  <form className="dork-builder-form" autoComplete="off">
    {Object.entries(fields).map(([key, value]) => (
      <div className="form-group" key={key}>
        <label className="form-label">{fieldLabels[key] || key}:</label>
        <input
          className="form-input"
          value={value}
          onChange={e => setFields({ ...fields, [key]: e.target.value })}
          placeholder={fieldLabels[key] || key}
        />
      </div>
    ))}
  </form>
);

export default DorkBuilderForm;