import React from 'react'
import { useSelector } from 'react-redux'
import FollowBtn from '../../components/FollowBtn'
import UserCard from '../../components/UserCard'


const Followers = ({ users, setShowFollowers }) => {

    const { auth } = useSelector(state => state)
    return (
        <div className=" flex fixed top-0 left-0 bg-gray-500 md:w-full h-screen ">
            <div className=" relative w-72 md:w-80 h-96 border-gray-800 rounded-sm bg-white p-5 m-auto ">
                <h5 className='text-center '>Followers</h5>
                <hr />
                {
                    users.map(user => (
                        <UserCard key={user._id} user={user} setShowFollowers={setShowFollowers}>
                            {
                                auth.user._id !== user._id && <FollowBtn user={user} />
                            }
                        </UserCard>
                    ))
                }
                <span style={{ fontSize: '2rem' }} onClick={() => setShowFollowers(false)} className="material-icons cursor-pointer absolute top-1 right-3   text-black hover:text-gray-300 ">
                    close
                </span>
            </div>
        </div>
    )
}

export default Followers
