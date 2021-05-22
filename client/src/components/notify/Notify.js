import React from 'react'
import { useSelector } from 'react-redux'
import Loading from './Loading'

const Notify = () => {

    const auth = useSelector(state => state.auth)
    console.log(auth)
    return (
        <div>
            {auth.status == 'loading' && <Loading />}
        </div>
    )
}

export default Notify
