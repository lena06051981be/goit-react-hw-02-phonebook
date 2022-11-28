export const FreindList = ({friends}) => {
    return (
        <div>
            {friends.map(friend =>(
                <li key={friend.id}>
                    {/* <span status={friend.isOnline} ></span> */}
                    <img className="avatar" src={friend.avatar} alt={friend.name} width="48" />
                    <p className="name">{friend.name}</p>
                </li>
            ))}
        </div>
    )
}