import React from 'react';
import Profile from './components/Profile/index.jsx';
import Statistics from './components/Statistics/index.jsx';
import FriendList from './components/FriendList/index.jsx';
import TransactionHistory from './components/TransactionHistory/index.jsx';
import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';
import './index.css';

function App() {
  return (
    <div className="wrapper">
      <Profile
        avatar={user.avatar}
        username={user.username}
        location={user.location}
        tag={user.tag}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
