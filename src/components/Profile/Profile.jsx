// import PropTypes from 'prop-types'
// import {username, tag, location, avatar, stats} from '../../data/user.json'

export const Profile = ({username, tag, location, avatar, stats }) => {
    return (
        <div>
            <div>
                <img
                src={avatar}
                alt={username}
                className="avatar"
                />
                <p>{username}</p>
                <p>{tag}</p>
                <p>{location}</p>
            </div>

            <ul className="stats">
                <li>
                    <span className="label"></span>
                    <span className="quantity"></span>
                </li>
                <li>
                    <span className="label"></span>
                    <span className="quantity"></span>
                </li>
                <li>
                    <span className="label"></span>
                    <span className="quantity"></span>
                </li>
            </ul>
        </div>
    )   
}