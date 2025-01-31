import React from 'react';
import './setting.css'

function SettingPage() {
  return (
    <div className="settings-container">
      <h1 className="settings-title">Settings</h1>
      <div className="settings-sections">
        <div className="setting-card">
          <h3>Profile</h3>
          <p>Update your personal information</p>
          <button>Manage</button>
        </div>
        <div className="setting-card">
          <h3>Notifications</h3>
          <p>Customize your notification preferences</p>
          <button>Manage</button>
        </div>
        <div className="setting-card">
          <h3>Privacy</h3>
          <p>Manage privacy and security settings</p>
          <button>Manage</button>
        </div>
        <div className="setting-card">
          <h3>Billing</h3>
          <p>View and update your billing information</p>
          <button>Manage</button>
        </div>
      </div>
    </div>
  );
}

export default SettingPage;

