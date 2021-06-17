import React, { useEffect, useState } from 'react'
import Avatar from '../../components/header/Avatar';
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
const Info = () => {
    const { id } = useParams();
    const { auth } = useSelector(state => state);
    const dispatch = useDispatch();
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        if (id === auth.username._id) {
            setUserData([auth.username]);
        }
    }, [id, auth.username])
    console.log(userData)

    return (
        <div className="flex justify-center ">
            {
                userData.map(user => (
                    <div className="flex flex-col items-center justify-between lg:flex-row" key={user._id}>
                        <Avatar src={user.avatar} />
                        <div>
                            <div className="flex justify-between items-center w-52">
                                <h2 className="text-2xl">{user.username}</h2>
                                <button className="transition duration-500 border-2 border-blue-400  bg-white text-blue-400 hover:bg-blue-400 hover:text-white py-2 px-4 rounded">
                                    Edit Profile
                                </button>
                            </div>
                            <div>
                                <span>
                                    {user.followers.length} Followers
                                </span>
                                <span>
                                    {user.following.length} Following
                                </span>
                            </div>
                            <h6>{user.fullname}</h6>
                            <p>{user.address}</p>
                            <h6>{user.email}</h6>
                            <a href={user.website} target="_blank" rel="noreferrer">
                                {user.website}
                            </a>
                            <p>{user.story}</p>
                        </div>
                    </div>

                ))
            }
        </div>
    )
}

export default Info
