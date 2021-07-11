import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import Styles from './Friend-list.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={Styles.list}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          id={friend.id}
          name={friend.name}
          avatar={friend.avatar}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default FriendList;
