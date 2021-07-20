import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../components/Avatar'

const UserCard = ({ children, user, setShowFollowers, setShowFollowing }) => {
    const handleCloseAll = () => {
        // if (handleClose) handleClose()
        if (setShowFollowers) setShowFollowers(false)
        if (setShowFollowing) setShowFollowing(false)
    }
    return (
        <Link to={`/profile/${user._id}`} onClick={handleCloseAll} className=" flex p-2  items-center space-between justify-center">
            <div className="flex w-64 rounded-lg bg-gray-200 hover:bg-gray-300">
                <Avatar src={user.avatar} classProps="h-6 rounded-full" />
                <div >
                    <span className="block">
                        {user.username}
                    </span>
                    <small>{user.fullname}</small>
                </div>
            </div>
            {children}
        </Link>
    )
}

export default UserCard
