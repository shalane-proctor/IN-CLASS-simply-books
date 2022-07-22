import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
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
    <>
      <Link href="/author/new" passHref>
        <Button>Add An Author</Button>
      </Link>
      <div>
        {authors.map((authorObj) => (
          <AuthorCard key={authorObj.firebaseKey} authorObj={authorObj} onUpdate={GetAllAuthors} />
        ))}
      </div>
    </>
  );
}
