import PropTypes from 'prop-types';
import { 
    ProfileContainer, 
    Description, 
    AvatarImg, 
    Username, 
    UserNickname,
    UserLocation,
    Stats,
    StatsLi,
 } from './Profile.styled'

// import {username, tag, location, avatar, stats} from '../../data/user.json'

export const Profile = ({username, tag, location, avatar, followers, views, likes }) => {
    return (
        <ProfileContainer>
            <Description>
                <AvatarImg
                    src={avatar}
                    alt={username}
                    // width={320}                
                />
                <Username>{username}</Username>
                <UserNickname>@{tag}</UserNickname>
                <UserLocation>{location}</UserLocation>
            </Description>

            <Stats>
                <StatsLi>
                    <span className="label">Followers</span>
                    <span className="quantity">{followers}</span>
                </StatsLi>
                <StatsLi>
                    <span className="label">Views</span>
                    <span className="quantity">{views}</span>
                </StatsLi>
                <StatsLi>
                    <span className="label">Likes</span>
                    <span className="quantity">{likes}</span>
                </StatsLi>
            </Stats>
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
