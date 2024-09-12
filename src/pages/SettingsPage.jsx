import React from 'react';
import SettingsForm from '../components/forms/SettingsForm';

const SettingsPage = () => {
  const initialSettings = {
    theme: 'light',
    language: 'en',
  };

  const handleSave = (settings) => {
    console.log('Settings saved:', settings);
    // Handle settings save
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Settings</h1>
      <SettingsForm initialSettings={initialSettings} onSave={handleSave} />
    </div>
  );
};

export default SettingsPage;
