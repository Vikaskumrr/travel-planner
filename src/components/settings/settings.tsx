import React from 'react';
import './settings.scss';

interface Props {
  onLogout: () => void;
  toggleTheme: () => void;
}

const Settings: React.FC<Props> = ({ onLogout, toggleTheme }) => {
  return (
    <div className="settings">
      <button onClick={toggleTheme}>Toggle Theme</button>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Settings;