import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Loading from './Loading'
// import Toast from './Toast'
import { toast } from 'react-toastify';

const Alert = () => {
    const { auth, alert } = useSelector(state => state)
    const customId = "custom-id-yes";

    const successToast = (msg) => {
        toast.success(msg, {
            toastId: customId
        });
    }
    const errorToast = (msg) => {
        toast.error(msg, {
            toastId: customId
        });
    }

    return (
        <>
            {alert.error && errorToast(alert.error)}
            {alert.loading && <Loading />}
            {alert.success && successToast(alert.success)}
        </>
    )
}

export default Alert
