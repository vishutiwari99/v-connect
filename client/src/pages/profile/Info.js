import React, { useEffect, useState } from 'react'
import Avatar from '../../components/header/Avatar';
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getProfileUsers } from '../../redux/actions/profileAction';
import EditProfile from './EditProfile';

const Info = () => {
    const { id } = useParams();
    const { auth, profile } = useSelector(state => state);
    const dispatch = useDispatch();
    const [userData, setUserData] = useState([]);
    const [onEdit, setOnEdit] = useState(false)

    useEffect(() => {
        if (id === auth.user._id) {
            setUserData([auth.user]);
        } else {
            dispatch(getProfileUsers({ users: profile.users, id, auth }))
            const newData = profile.users.filter(user => user._id === id)
            setUserData(newData)
        }
    }, [id, auth, dispatch, profile.users])
    console.log("t=yeh", userData)

    return (
        <>
            {
                userData.map(user => (
                    <div className="flex flex-col items-center justify-between mx-auto max-w-md lg:flex-row" key={user._id}>
                        <Avatar src={user.avatar} />
                        <div>
                            <div className="flex justify-between items-center w-56 lg:w-64">
                                <h2 className="text-4xl font-bold">{user.username}</h2>
                                <button onClick={() => setOnEdit(true)} className="transition duration-500 border-2 border-blue-400  bg-white text-blue-400 hover:bg-blue-400 hover:text-white py-2 px-4 rounded">
                                    Edit Profile
                                </button>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-blue-400">
                                    {user.followers.length} Followers
                                </span>
                                <span className="text-blue-400">
                                    {user.following.length} Following
                                </span>
                            </div>
                            <h6 className="font-semibold text-gray-600">{user.fullname}</h6>
                            <p >{user.address}</p>
                            <h6 className="font-medium text-gray-600">{user.email}</h6>
                            <a href={user.website} target="_blank" rel="noreferrer">
                                {user.website}
                            </a>
                            <p>{user.story}</p>
                        </div>
                        {
                            onEdit && <EditProfile user={user} setOnEdit={setOnEdit} />
                        }

                    </div>

                ))
            }
        </>
    )
}

export default Info
