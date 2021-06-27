import React from 'react'
import Avatar from '../components/Avatar'

const UserCard = ({ user }) => {
    return (
        <div className=" flex p-2  items-center justify-center">
            <div className="flex w-64 rounded-lg bg-gray-200 hover:bg-gray-300">
                <Avatar src={user.avatar} classProps="h-6 rounded-full" />
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
