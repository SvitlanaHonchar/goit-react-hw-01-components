import { Profile } from './Profile/Profile';
import user from './Profile/user.json';
import { Statistics } from './Statistics/Statistics';
import data from './Statistics/data.json';
import { FriendsList } from './FriendsList/FriendsList';
import friends from './FriendsList/friends.json';
import { TransactionsList } from './Transactions/TransactionsList';
import transactions from './Transactions/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        paddingTop: '100px',
        paddingBottom: '100px',
        // height: '100vh',
        display: 'flex',
        gap: '50px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 16,
        color: '#010101',
        backgroundColor: '#f7f7f7',
      }}
    >
      <div>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
        />
      </div>

      <div>
        <Statistics title="Upload stats" data={data} />
      </div>

      <div>
        <FriendsList friends={friends} />
      </div>

      <div>
        <TransactionsList transactions={transactions} />
      </div>
    </div>
  );
};

// propTypes
