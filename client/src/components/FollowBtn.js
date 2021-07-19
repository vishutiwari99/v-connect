import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { follow, unfollow } from '../redux/actions/profileAction';

const FollowBtn = ({ user }) => {
    const [followed, setFollowed] = useState(false);

    const { auth, profile } = useSelector(state => state)
    const dispatch = useDispatch();

    useEffect(() => {
        if (auth.user.following.find(item => item._id === user._id)) {
            setFollowed(true);
        }
    }, [auth.user.following, user._id])

    const handleFollow = () => {
        setFollowed(true);
        dispatch(follow({ users: profile.users, user, auth }))
    }

    const handleUnFollow = () => {
        setFollowed(false);
        dispatch(unfollow({ users: profile.users, user, auth }))

    }
    return (
        <>
            {
                followed ?
                    <button onClick={handleUnFollow} className="transition duration-500 border-2 border-blue-400  bg-white text-blue-400 hover:bg-blue-400 hover:text-white py-2 px-4 rounded">
                        unFollow
                    </button > : <button onClick={handleFollow} className="transition duration-500 border-2 border-blue-400  bg-white text-blue-400 hover:bg-blue-400 hover:text-white py-2 px-4 rounded">
                        Follow
                    </button>
            }
        </>
    )
}

export default FollowBtn
