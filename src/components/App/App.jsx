import React from 'react';
import Profile from '../SocialProfile/Profile';
import Stats from '../Statistics/Stats';
import user from '../SocialProfile/user.json';
import stats from '../Statistics/statsData';
import FriendList from '../FriendList/FriendList';
import friends from '../FriendList/friends.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import transactions from '../TransactionHistory/transactions.json';
import styles from './App.module.css';

const App = () => (
  <div className={styles.App}>
    <Profile user={user} />
    <Stats title="Upload stats" stats={stats} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </div>
);

export default App;
