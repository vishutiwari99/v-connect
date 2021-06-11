import React from 'react'
import Loader from "react-loader-spinner";

const Loading = () => {
    return (
        <div className="">
            <Loader
                type="Rings"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={1000} //3 secs
            />
        </div>
    )
}

export default Loading
