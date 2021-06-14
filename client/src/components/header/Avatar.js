import React from 'react'

const Avatar = ({ icon }) => {
    return <div className="text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center ">
        <span className="mr-1">
            <span className="material-icons">
                {icon}
            </span>

        </span>
    </div>
}

export default Avatar
