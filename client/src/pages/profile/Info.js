import React, { useEffect, useState } from 'react'
import Avatar from '../../components/Avatar';
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getProfileUsers } from '../../redux/actions/profileAction';
import EditProfile from './EditProfile';
import FollowBtn from '../../components/FollowBtn';
import Followers from './Followers';
import Following from './Following';

const Info = () => {
    const { id } = useParams();
    const { auth, profile } = useSelector(state => state);
    const dispatch = useDispatch();
    const [userData, setUserData] = useState([]);
    const [onEdit, setOnEdit] = useState(false);
    const [showFollowers, setShowFollowers] = useState(false);
    const [showFollowing, setShowFollowing] = useState(false);

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
                        <Avatar src={user.avatar} classProps="h-32 w-48 rounded-full" />
                        <div>
                            <div className="flex justify-between items-center w-56 lg:w-64">
                                <h2 className="text-4xl font-bold">{user.username}</h2>
                                {
                                    user._id === auth.user._id ?
                                        <button onClick={() => setOnEdit(true)} className="transition duration-500 border-2 border-blue-400  bg-white text-blue-400 hover:bg-blue-400 hover:text-white py-2 px-4 rounded">
                                            Edit Profile
                                        </button> : <FollowBtn user={user} />
                                }

                            </div>
                            <div className="flex justify-between">
                                <span className="text-blue-400" onClick={() => setShowFollowers(true)}>
                                    {user.followers.length} Followers
                                </span>
                                <span className="text-blue-400" onClick={() => setShowFollowing(true)}>
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
                            onEdit && <EditProfile setOnEdit={setOnEdit} />
                        }
                        {
                            showFollowers &&
                            <Followers
                                users={user.followers}
                                setShowFollowers={setShowFollowers}
                            />
                        }
                        {
                            showFollowing &&
                            <Following
                                users={user.following}
                                setShowFollowing={setShowFollowing}
                            />
                        }

                    </div>

                ))
            }
        </>
    )
}

export default Info
