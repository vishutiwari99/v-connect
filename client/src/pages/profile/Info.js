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
    }, [id, auth.user])
    console.log(userData)

    return (
        <div>
            {
                userData.map(user => (
                    <div key={user._id}>
                        <Avatar src={user.avatar} />
                    </div>
                ))
            }
        </div>
    )
}

export default Info
