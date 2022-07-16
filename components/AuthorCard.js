import { PropTypes } from 'prop-types';
import Card from 'react-bootstrap/Card';

export default function AuthorCard({ email, firstName, lastName }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{firstName} {lastName}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{email}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
}

AuthorCard.propTypes = {
  email: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
};

AuthorCard.defaultProps = {
  email: 'no email',
  firstName: null,
  lastName: null,
};
