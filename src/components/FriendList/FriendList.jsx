import PropTypes from "prop-types";
import {
    Friends,
    FriendsItem,
    FriendsStatus,
    FriendsName,
  } from './FriendList.styled';


export const FreindList = ({ friends }) => {
    return (
        <Friends>
            {friends.map(friend =>(
                <FriendsItem key={friend.id}>
                    <FriendsStatus status={friend.isOnline}></FriendsStatus>
                    <img className="avatar" src={friend.avatar} alt={friend.name} width={48} />
                    <FriendsName className="name">{friend.name}</FriendsName>
                </FriendsItem>
            ))}
        </Friends>
    )
}

FreindList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};