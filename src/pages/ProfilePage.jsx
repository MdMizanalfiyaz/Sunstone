import React from 'react';
import ProfileForm from '../components/forms/ProfileForm';

const ProfilePage = () => {
  const profile = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Software Developer',
  };

  const handleSave = (updatedProfile) => {
    console.log('Profile updated:', updatedProfile);
    // Handle profile update
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Profile</h1>
      <ProfileForm profile={profile} onSave={handleSave} />
    </div>
  );
};

export default ProfilePage;
