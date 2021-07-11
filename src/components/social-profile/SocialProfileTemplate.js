import React from 'react';
import PropTypes from 'prop-types';
import defaultAvatar from './default-avatar.svg';
import Styles from './SocialProfileTemplate.module.css';

const SocialProfileTemplate = ({
  name,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <div className={Styles.profile}>
      <div className="description">
        <img src={avatar} alt="Аватар пользователя" className={Styles.avatar} />
        <p className={Styles.name}> {name} </p>
        <p className={Styles.tag}> @ {tag} </p>
        <p className={Styles.location}> {location} </p>{' '}
      </div>
      <ul className={Styles.stats}>
        <li>
          <span className={Styles.label}> Followers </span>{' '}
          <span className={Styles.quantity}> {followers} </span>{' '}
        </li>
        <li>
          <span className={Styles.label}> Views </span>{' '}
          <span className={Styles.quantity}> {views} </span>{' '}
        </li>
        <li>
          <span className={Styles.label}> Likes </span>{' '}
          <span className={Styles.quantity}> {likes} </span>{' '}
        </li>
      </ul>
    </div>
  );
};

SocialProfileTemplate.defaultProps = {
  avatar: defaultAvatar,
  location: 'Earth',
};

SocialProfileTemplate.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  avatar: PropTypes.string,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default SocialProfileTemplate;
