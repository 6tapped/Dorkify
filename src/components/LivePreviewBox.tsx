import React from 'react';
import './livePreviewBox.css';

const LivePreviewBox = ({ dorkQuery }: { dorkQuery: string }) => (
  <div className="live-preview-box">
    <span className="live-preview-label">Live Preview:</span>
    <pre className="live-preview-query">{dorkQuery || 'Your query will appear here...'}</pre>
  </div>
);

export default LivePreviewBox;