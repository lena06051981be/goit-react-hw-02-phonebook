import PropTypes from "prop-types";
import { Profile } from "../Profile/Profile";
import { Statistics } from "components/Statistics/Statistics";
import { FreindList } from "components/FriendList/FriendList";
import { TransactionHistory } from "components/Transaction/TransactionHistory";

import user from '../../data/user.json';
import data from '../../data/data.json';
import friend from '../../data/friends.json';
import transactions from '../../data/transactions.json';

import { Container, } from './App.styled'

export const App = () => {
  return (
    <Container>
      <Profile 
      username ={user.username}
      tag = {user.tag}
      location = {user.location}
      avatar = {user.avatar}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FreindList friends={friend} />
      <TransactionHistory transaction={transactions} />
    </Container>
  );
};



// App.propTypes = {
//   children: PropTypes.node,
// };
