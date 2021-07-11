import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from './default-avatar.svg';
import Styles from './FriendListItem.module.css';

const FriendListItem = ({ id, name, avatar, isOnline }) => {
  return (
    <li className={Styles.item} key={id}>
      <span className={isOnline === true ? Styles.onstatus : Styles.offstatus}>
        {isOnline}
      </span>
      <img className={Styles.avatar} src={avatar} alt={name} width="48" />
      <p className={Styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.defaultProps = {
  avatar: defaultImage,
};

FriendListItem.propTypes = {
  id: PropTypes.number,
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
