import { PropTypes } from 'prop-types';

export default function UserInfo({
  displayName, image, email, lastLogin,
}) {
  return (
    <>
      <h1>Hello {displayName}! </h1>
      <img src={image} alt="profile pic" />
      <h3>{email}</h3>
      <h3>{lastLogin}</h3>
    </>
  );
}

UserInfo.propTypes = {
  displayName: PropTypes.string,
  image: PropTypes.string,
  email: PropTypes.string,
  lastLogin: PropTypes.string,
};

UserInfo.defaultProps = {
  displayName: null,
  image: 'https://i.pinimg.com/564x/fc/7e/ce/fc7ece8e8ee1f5db97577a4622f33975.jpg',
  email: null,
  lastLogin: 'Today',
};
