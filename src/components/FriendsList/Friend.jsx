import PropTypes from 'prop-types';
import { StyledSpan, StyledName } from './FriendsList.styled';

export function Friend({ friend: { avatar, name, isOnline } }) {
  return (
    <>
      <StyledSpan
        className={('status', isOnline ? 'green' : 'red')}
      ></StyledSpan>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <StyledName className="name">{name}</StyledName>
    </>
  );
}

Friend.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool,
  }),
};
