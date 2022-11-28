// import PropTypes from 'prop-types'
// import {username, tag, location, avatar, stats} from '../../data/user.json'

export const Profile = ({username, tag, location, avatar, followers, views, likes }) => {
    return (
        <div>
            <div>
                <img
                src={avatar}
                alt={username}
                width= "320"
                className="avatar"
                />
                <p>{username}</p>
                <p>@{tag}</p>
                <p>{location}</p>
            </div>

            <ul className="stats">
                <li>
                    <span className="label">Followers</span>
                    <span className="quantity">{followers}</span>
                </li>
                <li>
                    <span className="label">Views</span>
                    <span className="quantity">{views}</span>
                </li>
                <li>
                    <span className="label">Likes</span>
                    <span className="quantity">{likes}</span>
                </li>
            </ul>
        </div>
    )   
}