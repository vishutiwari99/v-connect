import React from 'react'

const Avatar = ({ src, classProps }) => {
    return <div className="text-gray-700  font-semibold py-2 px-4  inline-flex items-center ">
        <span className="mr-1">
            <img src={src} alt="avatar" className={classProps} />
        </span>
    </div>
}

export default Avatar
