import PropTypes from 'prop-types';
import { ProfileContainer, Description } from './Profile.styled'

// import {username, tag, location, avatar, stats} from '../../data/user.json'

export const Profile = ({username, tag, location, avatar, followers, views, likes }) => {
    return (
        <ProfileContainer>
            <Description>
                <img
                    src={avatar}
                    alt={username}
                    width={320}
                className="avatar"
                />
                <p>{username}</p>
                <p>@{tag}</p>
                <p>{location}</p>
            </Description>

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
        </ProfileContainer>
    )   
}

Profile.propTypes = {    
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.object,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
}
