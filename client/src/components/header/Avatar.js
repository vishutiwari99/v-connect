import React from 'react'

const Avatar = ({ src }) => {
    return <div className="text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center ">
        <span className="mr-1">
            {/* <span className="material-icons">
                {icon}
            </span> */}
            <img src={src} alt="avatar" className="h-6" />

        </span>
    </div>
}

export default Avatar
