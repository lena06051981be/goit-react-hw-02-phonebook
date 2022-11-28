// import PropTypes from 'prop-types'
// import {username, tag, location, avatar, stats} from '../../data/user.json'

export const Profile = ({username, tag, location, avatar, stats }) => {
    return (
            <div>
                <img
                src={avatar}
                alt={username}
                className="avatar"
                />
                <p>{username}</p>
                <p>{tag}</p>
                <p>{location}</p>
                <p>Test</p>
            </div>       
    )   
}