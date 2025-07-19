import React from 'react';
import './recentDorksDisplay.css';

const RecentDorksDisplay = ({ recentDorks }: { recentDorks: string[] }) => (
  <div className="recent-dorks-display">
    <div className="recent-dorks-title">Recent Dorks</div>
    <ul className="recent-dorks-list">
      {recentDorks.length === 0 ? (
        <li className="recent-dork-item">No recent dorks found.</li>
      ) : (
        recentDorks.map((dork, i) => (
          <li key={i} className="recent-dork-item">{dork}</li>
        ))
      )}
    </ul>
  </div>
);

export default RecentDorksDisplay;