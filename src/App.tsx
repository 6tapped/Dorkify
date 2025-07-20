import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CategoryTiles from './components/CategoryTiles';
import DorkBuilderForm from './components/DorkBuilderForm';
import LivePreviewBox from './components/LivePreviewBox';
import ActionButtons from './components/ActionButtons';
import RecentDorksDisplay from './components/RecentDorksDisplay';
import './App.css';

const categoryTemplates: Record<string, any> = {
  "Website Scoping": { site: "example.com" },
  "File Types": { fileType: "pdf" },
  "Page Title": { intitle: "index of" },
  "All in Title": { allintitle: "admin login" },
  "URL Matching": { inurl: "admin" },
  "All in URL": { allinurl: "login.php?id=" },
  "Page Text": { inText: "confidential" },
  "All in Text": { allintext: "username password" },
  "Directory Listing": { intitle: "index of", inurl: "ftp" },
  "Wildcard": { intitle: "index of", wildcard: "*.mp4" },
  "Logical OR": { or: '"login" OR "signin"' },
  "Exclude": { fileType: "sql", excludeSite: "github.com" },
  "Cached Pages": { cache: "example.com" },
  "Related Sites": { related: "nytimes.com" },
  "Backlinks (Legacy)": { link: "example.com" },
  "Config Files": { fileType: "env OR xml", inText: "DB_PASSWORD" },
  "SQLi Vulnerability": { inurl: "index.php?id=" },
  "Password Leaks": { fileType: "txt", inText: 'password=' },
  "Email Disclosure": { inText: "@gmail.com" },
  "Admin Panels": { intitle: "admin panel" },
  "Login Pages": { intitle: "login", inurl: "admin" },
  "Database Dumps": { fileType: "sql", inText: "password" },
  "Logs": { fileType: "log", inText: "error" },
  "Backup Files": { fileType: "bak OR old OR backup" },
  "Shells": { intitle: "upload shell" },
  "Cameras": { inurl: "/view.shtml" },
  "GitHub Leak": { site: "github.com", inText: "AWS_SECRET_ACCESS_KEY" },
  "Cloud Keys": { fileType: "json", inText: "private_key" },
  "Public Repos": { site: "bitbucket.org", inText: "password" },
  "Login Portals": { inurl: "wp-login.php" },
  "Robots.txt": { inurl: "robots.txt" },
  "API Keys": { inText: '"api_key" OR "apiSecret"' },
  "Remote Access": { inurl: "remote login" },
  ".git Repos": { inurl: ".git" },
  "WordPress Config": { fileType: "php", inText: "DB_PASSWORD", inurl: "wp-config" },
  "Database Access": { fileType: "accdb OR db", inText: "password" },
  "Sensitive Docs": { fileType: "xls OR xlsx", inText: "confidential" },
  "Environment Files": { fileType: "env", inText: "MAIL_HOST" },
  "API Docs": { intitle: "API documentation" },
  "Admin Dashboards": { intitle: "dashboard", inurl: "admin" },
  "Default Passwords": { inText: "default password", fileType: "pdf" },
  "Payment Data": { fileType: "xls", inText: "credit card" },
  "Open Redirects": { inurl: "redirect?url=" },
  "Login via Socials": { inurl: "oauth", inText: "login" },
  "Test Pages": { intitle: "test page" },
  "Camera Models": { inurl: "/view/index.shtml" },
  "CCTV Feeds": { intitle: "Live View / - AXIS" },
  "Database Interface": { intitle: "phpMyAdmin" },
  "Jira/Dashboard Info": { intitle: "Dashboard", inurl: "jira" },
  "SVN Configs": { inurl: ".svn/entries" }
};

function buildDorkQuery(fields: Record<string, string>) {
  let query = '';
  Object.entries(fields).forEach(([key, value]) => {
    if (!value) return;
    switch (key) {
      case 'site':
        query += `site:${value} `;
        break;
      case 'fileType':
        query += `filetype:${value} `;
        break;
      case 'intitle':
        query += `intitle:"${value}" `;
        break;
      case 'allintitle':
        query += `allintitle:${value} `;
        break;
      case 'inurl':
        query += `inurl:${value} `;
        break;
      case 'allinurl':
        query += `allinurl:${value} `;
        break;
      case 'inText':
        query += `intext:${value} `;
        break;
      case 'allintext':
        query += `allintext:${value} `;
        break;
      case 'wildcard':
        query += `${value} `;
        break;
      case 'or':
        query += `${value} `;
        break;
      case 'excludeSite':
        query += `-site:${value} `;
        break;
      case 'cache':
        query += `cache:${value} `;
        break;
      case 'related':
        query += `related:${value} `;
        break;
      case 'link':
        query += `link:${value} `;
        break;
      default:
        query += `${key}:${value} `;
        break;
    }
  });
  return query.trim();
}

interface DorkHistoryEntry {
  query: string;
  date: string;
}

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [selectedCategory, setSelectedCategory] = useState<string>('Website Scoping');
  const [formFields, setFormFields] = useState(categoryTemplates[selectedCategory]);
  const [dorkQuery, setDorkQuery] = useState('');
  const [recentDorks, setRecentDorks] = useState<DorkHistoryEntry[]>([]);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    setFormFields(categoryTemplates[selectedCategory] || {});
  }, [selectedCategory]);

  useEffect(() => {
    setDorkQuery(buildDorkQuery(formFields));
  }, [formFields]);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('recentDorks') || '[]');
    setRecentDorks(stored);
  }, []);

  // Add every new dork to history
  useEffect(() => {
    if (!dorkQuery) return;
    // Avoid duplicates in a row
    if (recentDorks[0]?.query === dorkQuery) return;
    const newEntry = { query: dorkQuery, date: new Date().toLocaleString() };
    const updated = [newEntry, ...recentDorks].slice(0, 50);
    setRecentDorks(updated);
    localStorage.setItem('recentDorks', JSON.stringify(updated));
    // eslint-disable-next-line
  }, [dorkQuery]);

  // Download history as txt
  const handleDownloadHistory = () => {
    const content = recentDorks
      .map(d => `[${d.date}] ${d.query}`)
      .join('\n\n');
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dorkify-history-${new Date().toISOString().slice(0,10)}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleSaveDork = () => {
    const newEntry = { query: dorkQuery, date: new Date().toLocaleString() };
    const updated = [newEntry, ...recentDorks].slice(0, 50);
    setRecentDorks(updated);
    localStorage.setItem('recentDorks', JSON.stringify(updated));
  };

  return (
    <div className={`app-container ${theme}`}>
      <Header theme={theme} setTheme={setTheme} />
      <CategoryTiles
        categories={Object.keys(categoryTemplates)}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
        theme={theme}
      />
      <DorkBuilderForm
        fields={formFields}
        setFields={setFormFields}
        selectedCategory={selectedCategory}
        theme={theme}
      />
      <LivePreviewBox dorkQuery={dorkQuery} />
      <ActionButtons
        dorkQuery={dorkQuery}
        onSave={handleSaveDork}
        onDownload={handleDownloadHistory}
      />
      <RecentDorksDisplay recentDorks={recentDorks} />
    </div>
  );
}

export default App;