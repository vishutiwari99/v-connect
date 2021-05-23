import React from 'react'
import { useSelector } from 'react-redux'
import Loading from './Loading'

const Notify = ({ message }) => {
    const auth = useSelector(state => state.auth)
    console.log(auth)
    return (
        <>
            <div class="fixed  top-0 right-0 m-8 w-4/6 md:w-full max-w-sm">
                <input type="checkbox" className="hidden" />
                <label className="close cursor-pointer flex  items-start justify-between w-full p-2 bg-green-500 h-24 rounded shadow-lg text-white" title="close" for="footertoast">
                    <div>
                        <h2 className="font-bold">Success</h2>
                        <p className="ml-2">{message}</p>
                    </div>

                    <svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                        <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
                        </path>
                    </svg>
                </label>
            </div>


        </>

    )
}

export default Notify
