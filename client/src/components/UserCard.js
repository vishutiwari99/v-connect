import React from 'react'
import Avatar from './header/Avatar'

const UserCard = ({ user }) => {
    return (
        <div className=" flex p-2  items-center justify-center">
            <div className="flex w-64 rounded-lg bg-gray-200 hover:bg-gray-300">
                <Avatar icon="account_circle" />
                <div >
                    <span className="block">
                        {user.username}
                    </span>
                    <small>{user.fullname}</small>
                </div>
            </div>
        </div>
    )
}

export default UserCard
