import { Friend } from './Friend';
import PropTypes from 'prop-types';
import { StyledFriendsList } from './FriendsList.styled';

export function FriendsList({ friends }) {
  return (
    <StyledFriendsList className="friend-list">
      {friends.map(friend => (
        <li key={friend.id} className="item">
          <Friend friend={friend} />
        </li>
      ))}
    </StyledFriendsList>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
