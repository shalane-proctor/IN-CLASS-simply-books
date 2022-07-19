import React, { useEffect, useState } from 'react';
import { getAuthors } from '../api/authorData'; import { useAuth } from '../utils/context/authContext';
import AuthorCard from '../components/AuthorCard';

export default function AuthorsHome() {
  const [authors, setAuthors] = useState([]);
  const { user } = useAuth();
  const GetAllAuthors = () => {
    getAuthors(user.uid).then(setAuthors);
  };
  useEffect(() => {
    GetAllAuthors();
  }, []);
  return (
    <div>
      {authors.map((authorObj) => (
        <AuthorCard
          key={authorObj.firebaseKey}
          authorObj={authorObj}
          onUpdate={GetAllAuthors}
        />
      ))}
    </div>
  );
}
