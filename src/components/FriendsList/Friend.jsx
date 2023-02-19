export function Friend({ friend: { avatar, name, isOnline } }) {
  return (
    <div>
      <span className="status"></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </div>
  );
}
