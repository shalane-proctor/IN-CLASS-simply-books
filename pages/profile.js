import React from 'react';
import { useAuth } from '../utils/context/authContext';
import UserInfo from '../components/User';
import { signOut } from '../utils/auth';

export default function Profile() {
  const { user } = useAuth();
  return (
    <>
      <div>
        <UserInfo displayName={user.displayName} image={user.image} email={user.email} lastLogin={user.lastLogin} />
      </div>
      <button onClick={signOut} type="button">Sign Out</button>
    </>
  );
}
