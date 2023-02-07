import PropTypes from 'prop-types';

export default function FriendListItem({ isOnline, avatar, name }) {
  return (
    <li className="item">
      {/* <span className={isOnline ? true : false}></span> */}
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className={name}></p>
    </li>
  );
}

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
