import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { viewAuthorDetails } from '../../api/mergedData';
import AuthorCard from '../../components/AuthorCard';
import BookCard from '../../components/BookCard';

export default function ViewAuthor() {
  const [authorDetails, setAuthorDetails] = useState({});
  const router = useRouter();

  const { firebaseKey } = router.query;

  useEffect(() => {
    viewAuthorDetails(firebaseKey).then(setAuthorDetails);
  }, [firebaseKey]);

  return (
    <>
      <AuthorCard
        key={authorDetails.firebaseKey}
        authorObj={authorDetails}
        onUpdate={
          <Link href="/authors" passHref />
        }
      />
      <div>
        {authorDetails.books?.map((book) => (
          <BookCard
            key={book.firebaseKey}
            bookObj={book}
            onUpdate={() => {
              viewAuthorDetails(firebaseKey).then(setAuthorDetails);
            }}
          />
        ))}
      </div>
    </>
  );
}
