import { Friend } from './Friend';

export function FriendsList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <li key={friend.id} className="item">
          <Friend friend={friend} />
        </li>
      ))}
    </ul>
  );
}
