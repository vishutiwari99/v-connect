import React from 'react'
import { useSelector } from 'react-redux'
import Loading from './Loading';

const Notify = () => {

    const { status } = useSelector(state => state.auth);
    return (
        <div>
            {status === 'loading' && <Loading />}

            {/* {
            alert.error && 
            <Toast msg={{title: 'Error', body: alert.error}}
            handleShow={() => dispatch({type: GLOBALTYPES.ALERT, payload: {}})} 
            bgColor="bg-danger" />
        }

        {
            alert.success && 
            <Toast msg={{title: 'Success', body: alert.success}} 
            handleShow={() => dispatch({type: GLOBALTYPES.ALERT, payload: {}})}
            bgColor="bg-success" />
        } */}
        </div>
    )
}

export default Notify
