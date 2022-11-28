// import PropTypes from "prop-types";
import { Profile } from "../Profile/Profile";
import user from '../../data/user.json'
import { Statistics } from "components/Statistics/Statistics";
import data from '../../data/data.json'
import { FreindList } from "components/FriendList/FriendList";
import friend from '../../data/friends.json'
import { TransactionHistory } from "components/Transaction/TransactionHistory";
import transactions from '../../data/transactions.json'

export const App = () => {
  return (
    <>
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
    </>
  );
};



// Product.propTypes = {
//   imgUrl: PropTypes.string,
//   name: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
// };

// const Profile = ({ name, email }) => (
//   <div>
//     <p>Name: {name}</p>
//     <p>Email: {email}</p>
//   </div>
// );

// const Panel = ({ title, children }) => (
//   <section>
//     <h2>{title}</h2>
//     {children}
//   </section>
// );

// export const App = () => (
//   <div>
//     <Panel title="User profile">
//       <Profile name="Mango" email="mango@mail.com" />
//     </Panel>
//   </div>
// );