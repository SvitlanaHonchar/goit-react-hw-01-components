import PropTypes from 'prop-types';

export function Friend({ friend: { avatar, name, isOnline } }) {
  return (
    <div>
      <span className="status" status={isOnline.toString()}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </div>
  );
}

Friend.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool,
  }),
};
