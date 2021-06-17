import React from 'react'

const Avatar = ({ src, size }) => {
    return <div className="text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center ">
        <span className="mr-1">
            {/* <span className="material-icons">
                {icon}
            </span> */}
            <img src={src} alt="avatar" className={size} />

        </span>
    </div>
}

export default Avatar
