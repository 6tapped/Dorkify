import React from 'react';
import './header.css';

interface HeaderProps {
  theme: 'dark' | 'light';
  setTheme: React.Dispatch<React.SetStateAction<'dark' | 'light'>>;
}

const Header: React.FC<HeaderProps> = ({ theme, setTheme }) => (
  <header className="header">
    <div>
      <span className="header-title">Dorkify</span>
      <span className="header-tagline">Build and execute Google dork queries with ease!</span>
    </div>
    <button
      className="theme-toggle-btn"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
    </button>
  </header>
);

export default Header;
