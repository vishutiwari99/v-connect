import React from 'react'
import { useSelector } from 'react-redux'
import Info from './Info'
import Posts from './Posts'
import Loading from '../../components/notify/Loading'

const Profile = () => {
    const { profile } = useSelector(state => state)
    return (
        <>{
            profile.loading ? <Loading /> :
                <Info />
        }
            <Posts />
        </>
    )
}

export default Profile
