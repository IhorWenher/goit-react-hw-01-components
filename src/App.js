import React from 'react';
import SocialProfile from './components/social-profile/Social-profile';
import user from './components/social-profile/user.json';
import Statistics from './components/statistics/Statistics';
import statisticalData from './components/statistics/statistical-data.json';
import FriendList from './components/friend-list/Friend-list';
import friends from './components/friend-list/friends.json';
import TransactionHistory from './components/transaction-history/Transaction-history';
import transactions from './components/transaction-history/transactions.json';
import Styles from './App.module.css';

const App = () => {
  return (
    <div className={Styles.container}>
      <h2>Профиль социальной сети</h2>
      <SocialProfile user={user} />
      <h2>Секция статистики</h2>
      <Statistics title="Upload stats" stats={statisticalData} />
      <h2>Список друзей</h2>
      <FriendList friends={friends} />
      <h2>История транзакций</h2>
      <TransactionHistory transactions={transactions} />
    </div>
  );
};

export default App;
