import React from 'react'
import Loader from "react-loader-spinner";

import Spinner from '../../images/Spinner-1s-200px.svg'

const Loading = ({ size }) => {
    return (
        <div className="flex items-center align-middle justify-center ">
            <img src={Spinner} className={size} alt="spinner" />
        </div>
    )
}

export default Loading
