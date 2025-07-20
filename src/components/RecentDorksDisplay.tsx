import React from 'react';
import './recentDorksDisplay.css';

interface DorkHistoryEntry {
  query: string;
  date: string;
}

const RecentDorksDisplay = ({ recentDorks }: { recentDorks: DorkHistoryEntry[] }) => (
  <div className="recent-dorks-display">
    <div className="recent-dorks-title">Recent Dorks</div>
    <ul className="recent-dorks-list">
      {recentDorks.length === 0 ? (
        <li className="recent-dork-item">No recent dorks found.</li>
      ) : (
        recentDorks.map((dork, i) => (
          <li key={i} className="recent-dork-item">
            <div>{dork.query}</div>
            <div style={{ fontSize: '0.8em', color: '#888' }}>{dork.date}</div>
          </li>
        ))
      )}
    </ul>
  </div>
);

export default RecentDorksDisplay;