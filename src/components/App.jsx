import Profile from './SocialProfile/SocialProfile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendsList/FriendListUl/FriendList';
import Transactions from './Transactions/Transactions';
import userProfile from '../Data/userProfile.json';
import statistics from '../Data/statistics.json';
import friendList from '../Data/friendsList.json';
import transactions from '../Data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={userProfile.username}
        tag={userProfile.tag}
        location={userProfile.location}
        avatar={userProfile.avatar}
        stats={userProfile.stats}
      />
      <Statistics title="Upload stats" stats={statistics} />
      <Statistics stats={statistics} />
      <FriendList friends={friendList} />;
      <Transactions items={transactions} />;
    </div>
  );
};
