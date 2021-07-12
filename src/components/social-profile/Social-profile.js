import React from 'react';
import PropTypes from 'prop-types';
import Styles from './SocialProfileTemplate.module.css';

const SocialProfile = ({ user }) => {
  return (
    <div className={Styles.profile}>
      <div className="description">
        <img
          src={user.avatar}
          alt="Аватар пользователя"
          className={Styles.avatar}
        />
        <p className={Styles.name}> {user.name} </p>
        <p className={Styles.tag}> @ {user.tag} </p>
        <p className={Styles.location}> {user.location} </p>{' '}
      </div>
      <ul className={Styles.stats}>
        <li>
          <span className={Styles.label}> Followers </span>{' '}
          <span className={Styles.quantity}> {user.stats.followers} </span>{' '}
        </li>
        <li>
          <span className={Styles.label}> Views </span>{' '}
          <span className={Styles.quantity}> {user.stats.views} </span>{' '}
        </li>
        <li>
          <span className={Styles.label}> Likes </span>{' '}
          <span className={Styles.quantity}> {user.stats.likes} </span>{' '}
        </li>
      </ul>
    </div>
  );
};

/* SocialProfile.defaultProps = {
  avatar: defaultAvatar,
  location: 'Earth',
};
 */

SocialProfile.propTypes = {
  user: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      location: PropTypes.string,
      avatar: PropTypes.string,
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default SocialProfile;
