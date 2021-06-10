import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Loading from './Loading'
// import Toast from './Toast'
import { toast } from 'react-toastify';

const Notify = () => {
    const { auth, notify } = useSelector(state => state)
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
            {notify.error && errorToast(notify.error)}
            {notify.loading && <Loading />}
            {notify.success && successToast(notify.success)}
        </>
    )
}

export default Notify
