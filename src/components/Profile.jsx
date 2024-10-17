import React from 'react';
import { useSelector } from 'react-redux';
import './Profile.css';

const Profile = () => {
  const user = useSelector(state => state.user);

  return (
    <div className="profile">
      <h1>{user.username}'s Profile</h1>
      <p>Email: {user.email}</p>
      {/* Add more profile details as needed */}
    </div>
  );
};

export default Profile;
