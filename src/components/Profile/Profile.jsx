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
    StatsLabel,
    StatsQuantity
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
                    <StatsLabel>Followers</StatsLabel>
                    <StatsQuantity>{followers}</StatsQuantity>
                </StatsLi>
                <StatsLi>
                    <StatsLabel>Views</StatsLabel>
                    <StatsQuantity>{views}</StatsQuantity>
                </StatsLi>
                <StatsLi>
                    <StatsLabel>Likes</StatsLabel>
                    <StatsQuantity>{likes}</StatsQuantity>
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
